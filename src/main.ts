const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;
const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A smiling face with blue and green eyes");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const eyeGradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "radialGradient",
);
eyeGradient.setAttribute("id", "eyeGradient");
eyeGradient.setAttribute("x1", "0%");
eyeGradient.setAttribute("y1", "0%");
eyeGradient.setAttribute("x2", "100%");
eyeGradient.setAttribute("y2", "100%");
eyeGradient.setAttribute("gradientUnits", "userSpaceOnUse");

const eyeGradientStop1 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
eyeGradientStop1.setAttribute("offset", "0%");
eyeGradientStop1.setAttribute("stop-color", "#57f557");
eyeGradient.append(eyeGradientStop1);

const eyeGradientStop2 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
eyeGradientStop2.setAttribute("offset", "100%");
eyeGradientStop2.setAttribute("stop-color", "#003cff");
eyeGradient.append(eyeGradientStop2);

defs.append(eyeGradient);
face.append(defs);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "url(#eyeGradient)");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "url(#eyeGradient)");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
mouth.setAttribute("d", "M 75 137 Q 100 160 125 137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("fill", "transparent");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
