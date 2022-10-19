class ajaxform{
  constructor(selector, settings){
    this.settings = settings
    this.form = document.querySelector(selector)
    this.fields = this.form.elements
    this.errors = []

    this.form.addEventListener('submit', (e) =>{
      e.preventDefault()

      if (this.isValid()){
        this.submit()
      }
    })
  }

  isValid() {
    const validators = this.settings.validators

    if (validators) {
      for (const fieldname in validators) {
        this.validationfield()
      }
    }
  }

  submit() {
    console.log('Отправка')
  }
}

new ajaxform('.form', {
  url: 'https://webdev-api.loftschool.com/sendmail';
  validators: {
    name: function(field){

    },
    phone: function(field){

    },
  }
})