// Tailwind Config untuk Tema Komik JDM
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'comic': ['"Bangers"', 'cursive'],
                'body': ['"Comic Neue"', 'cursive'],
            },
            colors: {
                'jdm-red': '#D80027',
                'jdm-black': '#1a1a1a',
                'jdm-yellow': '#FFD700',
                'jdm-white': '#F4F4F4',
            },
            boxShadow: {
                'hard': '6px 6px 0px 0px rgba(0,0,0,1)',
                'hard-hover': '10px 10px 0px 0px rgba(0,0,0,1)',
            }
        }
    }
}