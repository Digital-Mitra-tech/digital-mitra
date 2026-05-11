"use client"

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import CharacterCount from '@tiptap/extension-character-count'
import BubbleMenuExtension from '@tiptap/extension-bubble-menu'
import FloatingMenuExtension from '@tiptap/extension-floating-menu'

import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon,
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo, 
  Code,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Image as ImageIcon,
  RotateCcw,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Highlighter,
  Plus
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogEditorProps {
  value: string
  onChange: (content: string) => void
  placeholder?: string
}

const ToolbarButton = ({ 
  onClick, 
  isActive = false, 
  disabled = false, 
  children,
  title,
  className
}: { 
  onClick: () => void, 
  isActive?: boolean, 
  disabled?: boolean, 
  children: React.ReactNode,
  title: string,
  className?: string
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={cn(
      "p-2 rounded-lg transition-all flex items-center justify-center",
      isActive 
        ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400" 
        : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
      disabled && "opacity-30 cursor-not-allowed",
      className
    )}
  >
    {children}
  </button>
)

export function BlogEditor({ value, onChange, placeholder }: BlogEditorProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Typography,
      Placeholder.configure({
        placeholder: placeholder || 'Start writing your masterpiece...',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-indigo-600 underline cursor-pointer',
        },
      }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: 'rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-full h-auto my-6',
        },
      }),
      CharacterCount,
      BubbleMenuExtension,
      FloatingMenuExtension,
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm md:prose-base dark:prose-invert outline-none min-h-[400px] p-6 md:p-10 max-w-none focus:ring-0',
      },
    },
  })

  if (!mounted || !editor) {
    return <div className="h-[500px] w-full bg-slate-50 dark:bg-slate-900 animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800" />
  }

  const addImage = () => {
    const url = window.prompt('Enter Image URL')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('Enter URL', previousUrl)

    if (url === null) return
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 overflow-hidden shadow-sm flex flex-col group focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
      {/* Toolbar */}
      <div className="flex-none flex flex-wrap items-center gap-1 p-2 bg-slate-50/50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-30 backdrop-blur-md">
        <div className="flex items-center gap-0.5 px-1">
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            isActive={editor.isActive('heading', { level: 1 })}
            title="H1"
          >
            <Heading1 className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            isActive={editor.isActive('heading', { level: 2 })}
            title="H2"
          >
            <Heading2 className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            isActive={editor.isActive('heading', { level: 3 })}
            title="H3"
          >
            <Heading3 className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

        <div className="flex items-center gap-0.5 px-1">
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive('bold')}
            title="Bold"
          >
            <Bold className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive('italic')}
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive('underline')}
            title="Underline"
          >
            <UnderlineIcon className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

        <div className="flex items-center gap-0.5 px-1">
          <ToolbarButton 
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            isActive={editor.isActive({ textAlign: 'left' })}
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            isActive={editor.isActive({ textAlign: 'center' })}
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            isActive={editor.isActive({ textAlign: 'right' })}
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

        <div className="flex items-center gap-0.5 px-1">
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive('bulletList')}
            title="Bullets"
          >
            <List className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive('orderedList')}
            title="Numbers"
          >
            <ListOrdered className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive('blockquote')}
            title="Quote"
          >
            <Quote className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

        <div className="flex items-center gap-0.5 px-1">
          <ToolbarButton onClick={setLink} isActive={editor.isActive('link')} title="Link">
            <LinkIcon className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={addImage} title="Image">
            <ImageIcon className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleHighlight().run()} isActive={editor.isActive('highlight')} title="Highlight">
            <Highlighter className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-0.5 px-1">
          <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo">
            <Undo className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo">
            <Redo className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} title="Clear Formatting">
            <RotateCcw className="w-4 h-4" />
          </ToolbarButton>
        </div>
      </div>

      {/* Floating Menu */}
      {editor && (
        <FloatingMenu editor={editor} updateDelay={100}>
          <div className="flex gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-1 shadow-xl">
            <ToolbarButton 
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              isActive={editor.isActive('heading', { level: 1 })}
              title="H1"
              className="rounded-full"
            >
              <Heading1 className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton 
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              isActive={editor.isActive('bulletList')}
              title="List"
              className="rounded-full"
            >
              <List className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton 
              onClick={addImage}
              title="Add Image"
              className="rounded-full"
            >
              <Plus className="w-4 h-4" />
            </ToolbarButton>
          </div>
        </FloatingMenu>
      )}

      {/* Bubble Menu */}
      {editor && (
        <BubbleMenu editor={editor} updateDelay={100}>
          <div className="flex gap-0.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl p-1 shadow-2xl border border-slate-700">
            <ToolbarButton 
              onClick={() => editor.chain().focus().toggleBold().run()}
              isActive={editor.isActive('bold')}
              title="Bold"
              className="text-white hover:bg-white/10"
            >
              <Bold className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton 
              onClick={() => editor.chain().focus().toggleItalic().run()}
              isActive={editor.isActive('italic')}
              title="Italic"
              className="text-white hover:bg-white/10"
            >
              <Italic className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton 
              onClick={setLink}
              isActive={editor.isActive('link')}
              title="Link"
              className="text-white hover:bg-white/10"
            >
              <LinkIcon className="w-4 h-4" />
            </ToolbarButton>
          </div>
        </BubbleMenu>
      )}

      {/* Content Area - Fixed Height for Dashboard Compatibility */}
      <div className="h-[550px] overflow-y-auto overscroll-contain bg-white dark:bg-slate-950 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
        <EditorContent editor={editor} />
      </div>

      {/* Status Bar */}
      <div className="flex-none p-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-medium text-slate-500 uppercase tracking-tight">
        <div className="flex items-center gap-4">
          <span>{editor.storage.characterCount.words()} words</span>
          <span>{editor.storage.characterCount.characters()} chars</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={cn("w-1.5 h-1.5 rounded-full", editor.isFocused ? "bg-emerald-500" : "bg-slate-300")} />
          {editor.isFocused ? "Active" : "Ready"}
        </div>
      </div>
      
      <style jsx global>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror {
          padding-bottom: 200px;
          min-height: 100%;
        }
        .ProseMirror blockquote {
          border-left: 3px solid #6366f1;
          padding-left: 1.5rem;
          font-style: italic;
          color: #4b5563;
          margin: 1.5rem 0;
        }
        .dark .ProseMirror blockquote {
          color: #9ca3af;
        }
      `}</style>
    </div>
  )
}
