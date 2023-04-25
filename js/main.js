document.querySelector('header .container > i').onclick = showAndHideNav;
function showAndHideNav() {
    let list = document.querySelector('header .container > ul');
    if (this.classList.contains('fa-bars')){
        list.style.display = 'flex';
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
    } else {
        list.style.display = 'none';
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
    }
};

window.addEventListener('scroll', scroller);
function scroller() {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    document.querySelector('.scroller').style.width = `${(scrollTop / height) * 100}%`;
}

window.addEventListener('scroll', persentage);
function persentage() {
    let skillsSection = document.querySelector('.skills');
    let skills = document.querySelectorAll('.skills .progress > span');
    skills.forEach(skill => {
        if (window.scrollY >= skillsSection.offsetTop - 200) {
            skill.classList.add('show');
            skill.style.width = skill.dataset.width;
        } else {
            skill.classList.remove('show');
            skill.style.width = 0;
        }
    });
}

let timerInterval = setInterval(countDownTimer, 1000);
function countDownTimer() {
    let daysDiv     = document.getElementById("days");
    let hoursDiv    = document.getElementById("hours");
    let minutesDiv  = document.getElementById("minutes");
    let secondsDiv  = document.getElementById("seconds");

    let comingTime  = new Date("sep 9, 2024 15:37:25").getTime();
    let currentTime = new Date().getTime();
    let time        = comingTime - currentTime;

    let days    = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours   = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    daysDiv.textContent     = days < 10 ? `0${days}` : days;
    hoursDiv.textContent    = hours < 10 ? `0${hours}` : hours;
    minutesDiv.textContent  = minutes < 10 ? `0${minutes}` : minutes;
    secondsDiv.textContent  = seconds < 10 ? `0${seconds}` : seconds;

    if (time <= 0) {
        clearInterval(timerInterval);
        daysDiv.textContent = hoursDiv.textContent = minutesDiv.textContent = secondsDiv.textContent = "00";
    }
}

window.addEventListener('scroll', counterUpScroll);
function counterUp() {
    let divEls = document.querySelectorAll('.stats .box > div');
    divEls.forEach(e => {
        let targetNumber = Number(e.dataset.number);
        let countInterval = setInterval(()=> {
            e.textContent++;
            if (+e.textContent >= targetNumber) {
                clearInterval(countInterval);
            }
        }, 3000 / targetNumber)
    });
}
let started = false;
function counterUpScroll() {
    let section = document.querySelector('.stats');
    if (window.scrollY >= section.offsetTop - 100) {
        !started ? counterUp() : "";
        started = true;
    }
}

videoSwitcher();
function videoSwitcher() {
    let items = document.querySelectorAll('.video .list ul > li');
    let preview = document.querySelectorAll('.video .preview > div');

    items.forEach(item => {
        item.addEventListener('click', (e) => {

            items.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            
            preview.forEach(p => {
                p.classList.remove('active');
                if (p.classList.contains(item.dataset.class)) {
                    p.classList.add('active');
                }
            });
        });
    });
}

window.addEventListener('scroll', arrowToUp);
function arrowToUp() {
    if (window.scrollY >= 700) {
        document.querySelector('a i.top').style.display = 'block';
    } else {
        document.querySelector('a i.top').style.display = 'none';
    }
}