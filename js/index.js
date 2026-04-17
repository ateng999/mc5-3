$(document).ready(function(){
    $('.slider').slick({
        prevArrow: $('.group-prev'),
        nextArrow: $('.group-next'),
        dots: true
    });

    $('.group_slider_box').on('click', function () {
        var index = $(this).index();
        $('.slider').slick('slickGoTo', index + 1);
    });
});

document.querySelectorAll('.nav_item').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// document.addEventListener("scroll", function() {
//     const memberSection = document.getElementById("all");
//     const sideNav = document.getElementById("sideNav");
//     const footer = document.querySelector(".footer");

//     const rect = memberSection.getBoundingClientRect();
//     const footerRect = footer.getBoundingClientRect();

//     if (rect.top <= 0 && rect.bottom > 0) {
//         sideNav.style.position = "fixed";
//         sideNav.style.display = "block";
//         sideNav.style.top = "50%";
//         sideNav.style.transform = "translateY(-50%)";
//     } else {
//         sideNav.style.display = "none";
//     }

//     if (footerRect.top < window.innerHeight) {
//         sideNav.style.top = `${footerRect.top - sideNav.offsetHeight / 2}px`;
//         sideNav.style.transform = "translateY(-50%)";
//     }

// });

// const sideNavToggle = document.getElementById('sideNavToggle');
// const sideNavContent = document.getElementById('sideNavContent');

// sideNavToggle.addEventListener('click', function() {
//     sideNavContent.classList.toggle('active');

//     if ($(window).width() <= 767) {
//         if ($('.side_nav_content').hasClass('active')) {
//             $('.side_nav_txt').text('Close');
//         } else {
//             $('.side_nav_txt').text('Index');
//         }

//         const footer = document.querySelector(".footer");
//         const footerRect = footer.getBoundingClientRect();
//         const sideNav = document.getElementById("sideNav");

//         if (footerRect.top < window.innerHeight) {
//             sideNav.style.top = `${footerRect.top - sideNav.offsetHeight}px`;
//             sideNav.style.transform = "none";
//         }
//     }
// });
document.addEventListener("scroll", function() {
    const memberSection = document.getElementById("all");
    const sideNav = document.getElementById("sideNav");
    const footer = document.querySelector(".footer");

    const rect = memberSection.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom > 0) {
        sideNav.style.position = "fixed";
        sideNav.style.display = "block";
        sideNav.style.top = "50%";
        sideNav.style.transform = "translateY(-50%)";
    } else {
        sideNav.style.display = "none";
    }

    if (footerRect.top < window.innerHeight) {
        sideNav.style.top = `${footerRect.top - sideNav.offsetHeight / 2}px`;
        sideNav.style.transform = "translateY(-50%)";
    }
});

const sideNavToggle = document.getElementById('sideNav');
const sideNavContent = document.getElementById('sideNavContent');
const sideNavLinks = document.querySelectorAll('#sideNavContent a');


sideNavToggle.addEventListener('click', function() {
    sideNavContent.classList.toggle('active');

    if (window.innerWidth <= 767) {
        if ($('.side_nav_content').hasClass('active')) {
            $('.side_nav_txt').text('Close');
        } else {
            $('.side_nav_txt').text('Index');
        }

        const footer = document.querySelector(".footer");
        const footerRect = footer.getBoundingClientRect();
        const sideNav = document.getElementById("sideNav");

        if (footerRect.top < window.innerHeight) {
            sideNav.style.top = `${footerRect.top - sideNav.offsetHeight}px`;
            sideNav.style.transform = "none";
        }
    }
});

sideNavLinks.forEach(link => {
    link.addEventListener('click', function(event) {

        event.stopPropagation();
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const memberBoxes = document.querySelectorAll(".member_box");
    const modalElements = {
        "type1": document.getElementById("memberModalType1"),
        "type2": document.getElementById("memberModalType2"),
        "type3": document.getElementById("memberModalType3"),
        "type4": document.getElementById("memberModalType4"),
        "type5": document.getElementById("memberModalType5")
    };
    const closeModalButtons = document.querySelectorAll(".close");

    memberBoxes.forEach(function(memberBox) {
        memberBox.addEventListener("click", function() {
            const memberName = memberBox.getAttribute("data-name");
            const modalType = memberBox.getAttribute("data-modal-type");

            fetch('./data/members.json')
            .then(response => response.json())
            .then(data => {
                const member = data.members.find(m => m.memberName === memberName);
                if (member && modalType && modalElements[modalType]) {
                    openModal(modalType, member);
                }
            });
        });
    });

    function openModal(modalType, member) {
        const modal = modalElements[modalType];
        modal.style.display = "block";

        document.body.style.overflow = "hidden";

        modal.querySelector("#modal-grouplabel").innerText = member.grouplabel;
        modal.querySelector("#modal-memberImg").src = member.memberImg;
        modal.querySelector("#modal-nametop").innerText = member.nametop;
        modal.querySelector("#modal-name").innerText = member.name;
        modal.querySelector("#modal-nickname").innerText = member.nickname;
        modal.querySelector("#modal-birthday").innerText = member.birthday;
        modal.querySelector("#modal-from").innerText = member.from;
        modal.querySelector("#modal-height").innerText = member.height;
        modal.querySelector("#modal-travel").innerText = member.travel;
        modal.querySelector("#modal-language").innerText = member.language;
        modal.querySelector("#modal-likes").innerText = member.likes;
        modal.querySelector("#modal-mbti").innerText = member.mbti;
        modal.querySelector("#modal-strong-point").innerText = member.strong_point;
        modal.querySelector("#modal-hobby").innerText = member.hobby;
        modal.querySelector("#modal-actually").innerText = member.actually;
        modal.querySelector("#modal-skill").innerText = member.skill;
        modal.querySelector("#modal-part-time-job").innerText = member.part_time_job;
    }

    closeModalButtons.forEach(function(button) {
        button.onclick = function() {
            const modal = button.closest(".modal");
            modal.style.display = "none";

            document.body.style.overflow = "auto";
        };
    });


    window.onclick = function(event) {
        Object.values(modalElements).forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";

                document.body.style.overflow = "auto";
            }
        });
    };
});