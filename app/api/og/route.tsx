import { ImageResponse } from 'next/og';
import { packageDetails, supportPlanDetails } from '@/lib/data';

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const type = searchParams.get('type') || 'package'; // package or support

    // Default values
    let title = 'Digital Mitra';
    let description = 'Building the Digital Future';
    let highlight = 'Digital Services';

    // Lookup data if slug is provided
    if (slug) {
        const pkg = packageDetails.find((p) => p.slug === slug);
        if (pkg) {
            title = pkg.seoMeta?.title?.split('|')[0].trim() || pkg.title;
            description = pkg.seoMeta?.description || pkg.shortDescription;
            highlight = pkg.title;
        } else {
            const plan = supportPlanDetails.find((p) => p.slug === slug);
            if (plan) {
                title = plan.seoMeta?.title?.split('|')[0].trim() || plan.title;
                description = plan.seoMeta?.description || plan.shortDescription;
                highlight = plan.title;
            }
        }
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    border: '20px solid #000',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        padding: '40px 80px',
                        borderRadius: '20px',
                        border: '4px solid #000',
                        boxShadow: '10px 10px 0px 0px rgba(0,0,0,1)',
                        maxWidth: '80%',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 900,
                            color: '#000',
                            marginBottom: 20,
                            lineHeight: 1.1,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            color: '#555',
                            lineHeight: 1.4,
                            marginBottom: 40,
                        }}
                    >
                        {description}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#5C82A3',
                            color: 'white',
                            padding: '10px 30px',
                            borderRadius: '50px',
                            fontSize: 24,
                            fontWeight: 700,
                            border: '3px solid #000',
                        }}
                    >
                        Digital Mitra
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
