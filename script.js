


document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('contact__form')

  formulario.addEventListener('submit', function (event) {
    // Impedir o envio do formulário por padrão
    event.preventDefault()

    // Validar o nome (max de 50 caracteres)
    const nomeInput = document.getElementById('nome')
    const nomeValor = nomeInput.value.trim()
    if (nomeValor.length > 50) {
      alert('O nome deve ter no max 50 caracteres.')
      return

      if (nomeValor.length < 3) {
        nomeMensagem.textContent = 'O nome deve ter pelo menos 3 caracteres.'
        return
      } else {
        nomeMensagem.textContent = ''
      }
    }

    const subjectInput = document.getElementById('subject')
    const subjectValor = nomeInput.value.trim()
    if (nomeValor.length > 50) {
      alert('O nome deve ter no max 50 caracteres.')
      return

      if (nomeValor.length < 3) {
        nomeMensagem.textContent = 'O nome deve ter pelo menos 3 caracteres.'
        return
      } else {
        nomeMensagem.textContent = ''
      }
    }

    // Validar o email
    const emailInput = document.getElementById('email')
    const emailValor = emailInput.value.trim()
    if (!isValidEmail(emailValor)) {
      alert('Por favor, insira um email válido.')
      return
    }

    // Se a validação passar, você pode prosseguir com o envio do formulário
    alert('Formulário enviado com sucesso!')
    formulario.reset() // Limpar o formulário após o envio
  })
  function isValidEmail(email) {
    // Implemente uma validação de email adequada ao seu caso
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const msgtInput = document.getElementById('msg')
  const msgValor = nomeInput.value.trim()
  if (nomeValor.length < 300) {
    alert('O nome deve ter no max 300 caracteres.')
    return
  } else {
    nomeMensagem.textContent = ''
  }

  function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }
  showBackToTopButtonOnScroll()


})
