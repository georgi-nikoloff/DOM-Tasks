function solve() {
  const hideSectionElement = sectionEl => sectionEl.style.display = "none"
  const showSectionElement = showEl => showEl.style.display = "block"
  const sections = document.getElementsByTagName("section")
  const resultUl = document.getElementById('results');
  const resultH1 = resultUl.querySelectorAll('#results h1')[0]
  let counter = 0
  const rightAnswers = {
    'onclick': true,
    'JSON.stringify()': true,
    'A programming API for HTML and XML documents)': true
  }
  for (let i = 0; i < sections.length; i++) {
    const currentSection = sections[i];
    const nextSection = sections[i + 1]
    currentSection.addEventListener("click", (e) => {
      const answer = e.target.textContent.trim()
      if (rightAnswers.hasOwnProperty(answer)) {
        counter++
      }
      if (i === 2) {
        resultUl.style.display = 'block'
        if (counter === 2) {
          resultH1.textContent = `You are recognized as top JavaScript fan!`
        } else {
          resultH1.textContent = `You have ${counter} right answers`
        }
      }
      hideSectionElement(currentSection)
      showSectionElement(nextSection)
    })

  }
}
