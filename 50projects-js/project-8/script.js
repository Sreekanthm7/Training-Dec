const Labels = document.querySelectorAll('.form-control label')

Labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style= "transition-delay:${idx * 80}ms">${letter}</span>`)
    .join('')
})