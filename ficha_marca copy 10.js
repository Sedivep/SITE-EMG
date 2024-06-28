/*const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");v
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here 
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);



let $card = $(".card");
let $button = $(".shop");
let productInfo = $(".prod-info");

const createSleeveText = () => {
	$card.each((index, element) => {
		let content = $(element).find("p").text();
		let splitContent = content.split(" ");
		$(element).find("p").text("");
		splitContent.forEach((text, index) => {
			$(element).find("p").append(`
				<span class="sleeve-element">
 					<span class="slvd-text">${text} </span>
 				</span>
			`);
		});
	});
};

const setHeight = () => {
	$card.each((index, element) => {
		let $this = $(element);
		let setHeight = $this.outerHeight();
		$this
			.attr("data-height", setHeight)
			.height($this.find(".card_hero").height() + "px");
	});

	let slider = new Flickity(".card-parent", {
		pageDots: false,
		prevNextButtons: false,
		freeScroll: true
	});

	$(".card-parent").find(".flickity-viewport").css({ overflow: "visible" });
};

const expandCard = (event) => {
	let $this = $(event.currentTarget);
	let $cardParent = $this.parent();
	let $slvText = $(".slvd-text");

	if ($cardParent.hasClass("active")) {
		$cardParent.css({
			height: $cardParent.find(".card_hero").height() + "px"
		});
		$cardParent.removeClass("active");
		$cardParent.find(".slvd-text").each((index, textBlock) => {
			let $slvdTextEl = $(textBlock);
			$(textBlock).css({ "transition-delay": "0ms" });
		});
	} else {
		$cardParent.css({
			height: $cardParent.attr("data-height") + "px"
		});
		$this.parents(".card-parent").height($cardParent.attr("data-height") + "px");
		$cardParent.addClass("active");
		$cardParent.find(".slvd-text").each((index, textBlock) => {
			let delay = 30 * index + "ms";
			let $slvdTextEl = $(textBlock);
			$(textBlock).css({ "transition-delay": delay });
		});
	}
};

createSleeveText();
setHeight();
$button.on("click", (event) => expandCard(event));*/



let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

showSlide(slideIndex);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Automatic slide change every 3 seconds
setInterval(() => {
  nextSlide();
}, 3000);