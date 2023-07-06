// ============= ACCORDEON ===============

const pricesTitle = document.querySelectorAll('.prices__title');
const pricesItem = document.querySelector('.prices__price-item');
const pricesAccordeon = document.querySelectorAll('.prices__accordeon');

pricesTitle.forEach((el) => {
    el.addEventListener("click", () => {
        let content = el.nextElementSibling;
        let parentElement = content.parentElement;

        if(content.style.maxHeight) {
            pricesAccordeon.forEach((el) => el.style.maxHeight = null);
            parentElement.style.backgroundColor = "#EDF2EC";
            el.classList.remove('_active')

        } else {
            pricesAccordeon.forEach((el) => el.style.maxHeight = null);
            el.classList.add('_active')
            content.style.maxHeight = content.scrollHeight + 'px';
            parentElement.style.backgroundColor = "#D6E7D2";
        }
    })
})

    // window.addEventListener('click', (e) => {
    //     console.log();
    //     const target = e.target;
    //     if ( !target.closest('.prices__title')) {
    //         currentContent.style.maxHeight = 0;
    //         parentElement.style.backgroundColor = "#EDF2EC";
    //     }            
    // })   




// =============== BURGER MENU ===============

const burgerButton = document.querySelector(".header__burger-icon");
const headerMenu = document.querySelector(".header__nav-list");
const menuLinks = document.querySelectorAll(".header__nav-link");

burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__nav-list_active');
    document.body.classList.toggle('_lock');
    burgerButton.classList.toggle('header__burger-icon_active')
})

menuLinks.forEach(element => {
    element.addEventListener('click' , () => {
        if(burgerButton.classList.contains('header__burger-icon_active')) {
    headerMenu.classList.remove('header__nav-list_active');
    document.body.classList.remove('_lock');
    burgerButton.classList.remove('header__burger-icon_active')
        }
    })
})

// ================== SERVICE SECTION ====================

// все кнопки service
const serviceBtns = document.querySelectorAll(".button--service");
// каждая по отдельности
const buttonGarden = document.querySelector(".button_gardens");
const buttonPlanting = document.querySelector(".button_planting");
const buttonLawn = document.querySelector(".button_lawn");
// карточки по видам
const cardGarden = document.querySelectorAll(".service__card_garden");
const cardPlanting = document.querySelectorAll(".service__card_planting");
const cardLawn = document.querySelector(".service__card_lawn");

const cardsService = document.querySelectorAll(".service__card");


serviceBtns.forEach(el => {
    el.addEventListener('click', () => {
        // garden
        if(el == buttonGarden) {
            // 1 если карточка размыта и нажата другая кнопка, нажимая на кнопку убираем блюр и делаем активной
            if(!(buttonLawn.classList.contains('button--service_active') &&
               buttonPlanting.classList.contains('button--service_active'))) {

                if(cardGarden[0].classList.contains('blur')) {
                    cardGarden.forEach(el => el.classList.remove('blur'));
                    cardGarden.forEach(el => el.classList.add('card_active'));
                    buttonGarden.classList.add('button--service_active');         
                }
                // 2 если ничего не нажато, нажимаем, делаем кнопку активной и добавляем блюр соседним карточкам
                else if(!cardGarden[0].classList.contains('card_active') &&
                   !buttonLawn.classList.contains('button--service_active') &&
                   !buttonPlanting.classList.contains('button--service_active'))
                    {
                    buttonGarden.classList.add('button--service_active');
                    cardGarden.forEach(el => el.classList.add('card_active')); 
                    cardPlanting.forEach(el => el.classList.add('blur')); 
                    cardLawn.classList.add('blur'); 
                    console.log(2);
                }
                // 3 если нажата одна текущая кнопка, нажимая убираем блюр у других и делаем кнопку неактивной
                else if((cardGarden[0].classList.contains('card_active') && 
                    !buttonLawn.classList.contains('button--service_active')) &&
                    !buttonPlanting.classList.contains('button--service_active'))  {
                    buttonGarden.classList.remove('button--service_active');         
                    cardPlanting.forEach(el => el.classList.remove('blur')); 
                    cardLawn.classList.remove('blur'); 
                    cardGarden.forEach(el => el.classList.remove('card_active'));
                }
                // 4 если нажата (активна) другая кнопка и текущая (они не в блюре), нажимая делаем кнопку неактивной и возвращаем обратно в блюр
                else if((buttonLawn.classList.contains('button--service_active') && 
                    buttonGarden.classList.contains('button--service_active')) ||
                    (buttonPlanting.classList.contains('button--service_active') &&
                    buttonGarden.classList.contains('button--service_active')) &&
                    !cardGarden[0].classList.contains('blur')
                    ) {
                    buttonGarden.classList.remove('button--service_active');         
                    cardGarden.forEach(el => el.classList.add('blur'));
                    cardGarden.forEach(el => el.classList.remove('card_active'));
                } 
            }
        }
        // buttonLawn
        else if(el == buttonLawn) {
            if(!(buttonGarden.classList.contains('button--service_active') &&
               buttonPlanting.classList.contains('button--service_active'))) {
                // 1
                if(cardLawn.classList.contains('blur')) {
                    cardLawn.classList.remove('blur');
                    cardLawn.classList.add('card_active');
                    buttonLawn.classList.add('button--service_active');         
                }
                // 2
                else if(!cardLawn.classList.contains('card_active') &&
                   !buttonGarden.classList.contains('button--service_active') &&
                   !buttonPlanting.classList.contains('button--service_active'))
                    {
                    buttonLawn.classList.add('button--service_active');
                    cardLawn.classList.add('card_active'); 
                    cardPlanting.forEach(el => el.classList.add('blur')); 
                    cardGarden.forEach(el => el.classList.add('blur'));  
                    console.log(2);
                }
                // 3
                else if((cardLawn.classList.contains('card_active') && 
                    !buttonGarden.classList.contains('button--service_active')) &&
                    !buttonPlanting.classList.contains('button--service_active'))  {
                    buttonLawn.classList.remove('button--service_active');         
                    cardPlanting.forEach(el => el.classList.remove('blur')); 
                    cardGarden.forEach(el => el.classList.remove('blur'));  
                    cardLawn.classList.remove('card_active');
                }

                // 4
                else if((buttonLawn.classList.contains('button--service_active') && 
                    buttonGarden.classList.contains('button--service_active')) ||
                    (buttonPlanting.classList.contains('button--service_active') &&
                    buttonLawn.classList.contains('button--service_active')) &&
                    !cardLawn.classList.contains('blur')
                    ) {
                    buttonLawn.classList.remove('button--service_active');         
                    cardLawn.classList.add('blur');
                    cardLawn.classList.remove('card_active');
                }
            } 
         }
            if(el == buttonPlanting) {
            // 1
                if(!(buttonLawn.classList.contains('button--service_active') &&
                buttonGarden.classList.contains('button--service_active'))) {
                // 1 если карточка размыта и нажата другая кнопка, нажимая на кнопку убираем блюр и делаем активной
                    if(cardPlanting[0].classList.contains('blur')) {
                        cardPlanting.forEach(el => el.classList.remove('blur'));
                        cardPlanting.forEach(el => el.classList.add('card_active'));
                        buttonPlanting.classList.add('button--service_active');         
                    }
                    // 2 если ничего не нажато, нажимаем, делаем кнопку активной и добавляем блюр соседним карточкам
                    else if(!cardPlanting[0].classList.contains('card_active') &&
                       !buttonLawn.classList.contains('button--service_active') &&
                       !buttonGarden.classList.contains('button--service_active'))
                    {
                        buttonPlanting.classList.add('button--service_active');
                        cardPlanting.forEach(el => el.classList.add('card_active')); 
                        cardGarden.forEach(el => el.classList.add('blur')); 
                        cardLawn.classList.add('blur'); 
                        console.log(2);
                    }
                    // 3 если нажата одна текущая кнопка, нажимая убираем блюр у других и делаем кнопку неактивной
                    else if((cardPlanting[0].classList.contains('card_active') && 
                        !buttonLawn.classList.contains('button--service_active')) &&
                        !buttonGarden.classList.contains('button--service_active'))  {
                        buttonPlanting.classList.remove('button--service_active');         
                        cardGarden.forEach(el => el.classList.remove('blur')); 
                        cardLawn.classList.remove('blur'); 
                        cardPlanting.forEach(el => el.classList.remove('card_active'));
                    }
                    // 4 если нажата (активна) другая кнопка и текущая (они не в блюре), нажимая делаем кнопку неактивной и возвращаем обратно в блюр
                    else if((buttonLawn.classList.contains('button--service_active') && 
                        buttonPlanting.classList.contains('button--service_active')) ||
                        (buttonPlanting.classList.contains('button--service_active') &&
                        buttonGarden.classList.contains('button--service_active')) &&
                        !cardPlanting[0].classList.contains('blur')
                        ) {
                        buttonPlanting.classList.remove('button--service_active');         
                        cardPlanting.forEach(el => el.classList.add('blur'));
                        cardPlanting.forEach(el => el.classList.remove('card_active'));
                    } 
                }
            }
    })
})
 
// contacts select

const dropdown = document.querySelector('.contacts__dropdown');
const cityChange = document.querySelector('.contacts__city-change');
const contactsCites = document.querySelector('.contacts__cites');

const cityEtem = document.querySelectorAll('.contacts__cites-item');   
const cityInfo = document.querySelector('.contacts__city-info'); 

const cityHeader = document.querySelector('.contacts__city-name'); 

const cityTableName = document.querySelector('.contacts__table-name'); 
const cityTablePhone = document.querySelector('.contacts__phone'); 
const cityTableAdress = document.querySelector('.contacts__adress'); 

const cityButton = document.querySelector('.contacts__call-button');

const contactCards = [
    {
        City: "Canandaigua, NY",
        Phone: "+1 585 393 0001",
        "Office adress": "151 Charlotte Street"
        
    },
    {
        City: "New York City",
        Phone: "+1 212 456 0002",
        "Office adress": "9 East 91st Street"   
    },
    {
        City: "Yonkers, NY",
        Phone: "+1 914 678 0003",
        "Office adress": "511 Warburton Ave"
        
    },
    {
        City: "Sherrill, NY",
        Phone: "+1 315 908 0004",
        "Office adress": "14 WEST Noyes BLVD"
    }
]



dropdown.addEventListener('click', () => {
    if(contactsCites.style.maxHeight) {
        contactsCites.style.maxHeight = null;
        cityChange.classList.remove('_active');
        dropdown.classList.remove('_active');
    } else {
        if(cityInfo.classList.contains('_active')) {
            cityInfo.classList.remove('_active');
        }
        contactsCites.style.maxHeight = contactsCites.scrollHeight + 'px';
        contactsCites.classList.add('animated');
        cityChange.classList.add('_active');
        dropdown.classList.add('_active');
    }
})

cityEtem.forEach((el) => {
    el.addEventListener('click', () => {
        cityInfo.classList.add('_active');
        dropdown.classList.remove('_active');
        contactsCites.classList.remove('animated');
        contactsCites.style.maxHeight = null;
        if(el == cityEtem[0]) {
            cityHeader.innerHTML = contactCards[0].City;
            cityTableName.innerHTML = contactCards[0].City;
            cityTablePhone.innerHTML = contactCards[0].Phone;
            cityTableAdress.innerHTML = contactCards[0]['Office adress'];
            cityButton.href = `tel:${contactCards[0].Phone}`; 
        } else if(el == cityEtem[1]) {
            cityHeader.innerHTML = contactCards[1].City;
            cityTableName.innerHTML = contactCards[1].City;
            cityTablePhone.innerHTML = contactCards[1].Phone;
            cityTableAdress.innerHTML = contactCards[1]['Office adress'];
            cityButton.href = `tel:${contactCards[1].Phone}`; 
            console.log('test2');
        } else if(el == cityEtem[2]) {
            cityHeader.innerHTML = contactCards[2].City;
            cityTableName.innerHTML = contactCards[2].City;
            cityTablePhone.innerHTML = contactCards[2].Phone;
            cityTableAdress.innerHTML = contactCards[2]['Office adress'];
            cityButton.href = `tel:${contactCards[2].Phone}`;
            console.log('test3');
        } else if(el == cityEtem[3]) {
            cityHeader.innerHTML = contactCards[3].City;
            cityTableName.innerHTML = contactCards[3].City;
            cityTablePhone.innerHTML = contactCards[3].Phone;
            cityTableAdress.innerHTML = contactCards[3]['Office adress'];
            cityButton.href = `tel:${contactCards[3].Phone}`;
            console.log('test4');
        } 
    })
    
})