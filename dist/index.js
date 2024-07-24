document.addEventListener('DOMContentLoaded', ()=> {
    mobileMenu = document.getElementById("mobile-menu-btn")
    navBar = document.getElementById('nav-bar')
    featuresBtn = document.getElementById('features-btn')
    featuresDropDown = document.getElementById('features-dropdown')
    featuresArrow = document.getElementById('features-arrow')
    companyBtn = document.getElementById('company-btn')
    companyDropDown = document.getElementById('company-dropdown')
    companyArrow = document.getElementById('company-arrow')


    const arrow = (changeRequested, element) => {
        if (changeRequested == 'up'){
            element.src="images/icon-arrow-up.svg"
        }
        else {
            element.src="images/icon-arrow-down.svg"
        }
    }

    const hide = (element) => {
        element.classList.add('hidden')
    }

    const show =  (element) => {
        element.classList.remove('hidden')
    }

    featuresBtn.addEventListener('click', () => {
        if (featuresDropDown.classList.contains('hidden')){
            show(featuresDropDown)
            arrow('up', featuresArrow )
        }else {
            console.log('feature printed')
            hide(featuresDropDown)
            arrow('down', featuresArrow)
        }
    })

    companyBtn.addEventListener('click', () => {
        if (companyDropDown.classList.contains('hidden')){
            show(companyDropDown)
            arrow('up', companyArrow )
        }else {
            hide(companyDropDown)
            arrow('down', companyArrow )
        }
    })

    mobileMenu.addEventListener('click', () => {
        if (navBar.classList.contains('hidden')){
            mobileMenu.src = 'images/icon-close-menu.svg'
            show(navBar)
        }else {
            hide(navBar)
            mobileMenu.src = 'images/icon-menu.svg'
        }
    })

})