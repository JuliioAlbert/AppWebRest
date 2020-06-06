const taildwindcss = require('tailwindcss');


module.exports={
    plugins: [
        taildwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}