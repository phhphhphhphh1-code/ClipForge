const pick = a => a[Math.floor(Math.random() * a.length)];

function topic(id) {
  return document.getElementById(id).value.trim() || "your topic";
}

function generateHooks() {
  let t = topic("hookTopic");
  let a = [
    `Nobody tells you this about ${t}…`,
    `I tried ${t} so you don't have to.`,
    `Stop scrolling if you care about ${t}.`,
    `3 things I wish I knew about ${t}.`,
    `The biggest mistake people make with ${t}.`
  ];
  document.getElementById("hookOutput").textContent = pick(a);
}

function generateCaption() {
  let t = topic("captionTopic");
  document.getElementById("captionOutput").textContent =
    `${t} changed the game. Would you try this? 👀\nSave this for later + follow for more.`;
}

function generateIdeas() {
  let t = topic("ideaTopic");
  let a = [
    `Before vs. after: ${t}`,
    `3 mistakes beginners make with ${t}`,
    `React to the most surprising ${t} moment`,
    `A 30-second beginner guide to ${t}`,
    `Try this ${t} challenge and rate the result 1–10`
  ];
  document.getElementById("ideaOutput").textContent = a.join("\n");
}

function generateHashtags() {
  let t = topic("hashTopic").replace(/\s+/g, "");
  document.getElementById("hashOutput").textContent =
    `#${t} #fyp #viral #shorts #reels #creator #contentcreator #trending`;
}

function subscribe(e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent =
    "Thanks! Connect this form to an email provider before launching so submissions are actually collected.";
}
