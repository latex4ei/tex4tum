const Options = (function () {
  // list of options
  const lstOptions = ['definition', 'example', 'explanation', 'legend']
  const defaultOptions = [true, false, false, false]

  const VERSION_STRING = '0.01'

  // Private Methods:
  const showClass = function (className, isVisible) {
    if (isVisible) {
      $(`.${className}`).collapse('show')
    } else {
      $(`.${className}`).collapse('hide')
    }
    // el = document.getElementsByClassName(className);
    // for (i = 0; i < el.length; i++) {
    //     if (isVisible) {
    //         el[i].style.display = 'block';
    //     } else {
    //         el[i].style.display = 'none';
    //     }
    // }
  }

  const setCookie = function (key, value, expiredays) {
    const d = new Date()
    d.setTime(d.getTime() + (expiredays * 24 * 60 * 60 * 1000))
    const expires = `expires=${d.toUTCString()}`
    document.cookie = `${key}=${value};${expires};path=/`
  }

  const getCookie = function (key) {
    const name = `${key}=`
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  const checkFirstVisit = function () {
    if (getCookie('version') != VERSION_STRING) {
      for (let i = 0; i < lstOptions.length; i++) {
        setCookie(lstOptions[i], defaultOptions[i], 14)
      }
      setCookie('version', VERSION_STRING, 60)
    }
  }

  // Public Methods
  const changeOption = function (element) {
    const className = element.id.split('_')[1]

    showClass(className, element.checked) // set visibility
    setCookie(className, element.checked, 60) // save cookie
  }

  const loadOptions = function () {
    checkFirstVisit()
    for (let i = 0; i < lstOptions.length; i++) {
      const curOption = lstOptions[i]
      const state = (getCookie(curOption) == 'true')
      showClass(curOption, state) // set visibility

      cbox = document.getElementById(`checkbox_${curOption}`)
      cbox.checked = state
    }
  }

  return {
    // Register all public methods here
    changeOption,
    loadOptions
  }
}())
