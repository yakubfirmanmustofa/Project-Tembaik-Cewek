// animate contant
gsap.registerPlugin(TextPlugin);

// content
gsap.from(".box-content", {
  duration: 0.75,
  y: "-100%",
  opacity: 0,
  ease: "bounce",
});
gsap.from(".box-content img", {
  duration: 0.75,
  y: "100%",
  opacity: 0,
  ease: "bounce",
  delay: 0.8,
});
gsap.from(".box-content h2", { duration: 1, y: 20, opacity: 0, delay: 1.3 });
gsap.from(".box-content h3", { duration: 1, y: -20, opacity: 0, delay: 1.3 });

gsap.from(".mau", { duration: 1, x: "50%", opacity: 0, delay: 1.5 });
gsap.from(".gak", { duration: 1, x: "-50%", opacity: 0, delay: 1.5 });

gsap.to(".box-content p", {
  duration: 1.5,
  delay: 1.5,
  text: "Harus mau pokoknya😑",
});

// form
gsap.from(".box-form", {
  duration: 0.75,
  y: "-100%",
  opacity: 0,
  ease: "bounce",
});

gsap.to(".box-form h3", {
  duration: 1.5,
  delay: 0.5,
  text: "Hi, Please Jawab Jujur 🙏",
});

gsap.from(".label-jawab", { duration: 1, y: "50%", opacity: 0, delay: 1 });
gsap.from(".jawab", { duration: 1, y: -30, opacity: 0, delay: 1.5 });

gsap.from(".label-pesan", { duration: 1, y: "50%", opacity: 0, delay: 1 });
gsap.from(".pesan", { duration: 1, y: "-30", opacity: 0, delay: 1.5 });

gsap.from(".kirim", {
  duration: 0.75,
  y: "100%",
  opacity: 0,
  ease: "bounce",
  delay: 2,
});
