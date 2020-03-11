import Typography from 'typography';



const typography = new Typography({
    title: 'lpmco',
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    headerFontFamily: [
        'Core Mellow',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
    ],
    bodyFontFamily: [
        'Open Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
    ],
    googleFonts: [{
        name: 'Open Sans',
        styles: ['400&display=swap'],
    }, ],
    scaleRatio: 3.998,
    headerWeight: 700,
    overrideStyles: () => ({
        img: {
            marginBottom: 0,
        },
    }),
});

export default typography;