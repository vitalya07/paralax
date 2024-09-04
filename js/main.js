// window.addEventListener('scrol', e => {
//     document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
// })
window.addEventListener('scroll', e => {
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})