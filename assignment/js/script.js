"use strict";

function stopAnimation() {
    document.querySelector("div.wrapper").className = "wrapper";
    void document.querySelector("div.wrapper").offsetWidth;

    document.querySelector("div.arrow-right-container").className = "arrow-right-container";
    document.querySelector("div.arrow-right").className = "arrow-right";
    document.querySelector("div.arrow-right-title").className = "arrow-right-title";
    document.querySelector("div.arrow-right-content").className = "arrow-right-content";

    document.querySelector("div.arrow-down-container").className = "arrow-down-container";
    document.querySelector("div.arrow-down").className = "arrow-down";
    document.querySelector("div.arrow-down-title").className = "arrow-down-title";
    document.querySelector("div.arrow-down-content").className = "arrow-down-content";

    document.querySelector("div.arrow-left-container").className = "arrow-left-container";
    document.querySelector("div.arrow-left").className = "arrow-left";
    document.querySelector("div.arrow-left-title").className = "arrow-left-title";
    document.querySelector("div.arrow-left-content").className = "arrow-left-content";

    document.querySelector("div.arrow-up-container").className = "arrow-up-container";
    document.querySelector("div.arrow-up").className = "arrow-up";
    document.querySelector("div.arrow-up-title").className = "arrow-up-title";
    document.querySelector("div.arrow-up-content").className = "arrow-up-content";
}

if (document.querySelector("div.arrow-right-title")) {
    document.querySelector("div.arrow-right-title").addEventListener("click", function () {
        stopAnimation();
        document.querySelector("div.wrapper").className = "wrapper fade";
        document.querySelector("div.arrow-right-container").className = "arrow-right-container button moveLeft";

        document.querySelector("div.arrow-right").className = "arrow-right fadeIn";
        document.querySelector("div.arrow-right-title").className = "arrow-right-title fadeIn";
        document.querySelector("div.arrow-right-content").className = "arrow-right-content fadeOut";
    });
}

if (document.querySelector("div.arrow-left-title")) {
    document.querySelector("div.arrow-left-title").addEventListener("click", function () {
        stopAnimation();
        document.querySelector("div.wrapper").className = "wrapper fade";
        document.querySelector("div.arrow-left-container").className = "arrow-left-container button moveRight";

        document.querySelector("div.arrow-left").className = "arrow-left fadeIn";
        document.querySelector("div.arrow-left-title").className = "arrow-left-title fadeIn";
        document.querySelector("div.arrow-left-content").className = "arrow-left-content fadeOut";
    });
}

if (document.querySelector("div.arrow-up-title")) {
    document.querySelector("div.arrow-up-title").addEventListener("click", function () {
        stopAnimation();
        document.querySelector("div.wrapper").className = "wrapper fade";
        document.querySelector("div.arrow-up-container").className = "arrow-up-container button moveDown";

        document.querySelector("div.arrow-up").className = "arrow-up fadeIn";
        document.querySelector("div.arrow-up-title").className = "arrow-up-title fadeIn";
        document.querySelector("div.arrow-up-content").className = "arrow-up-content fadeOut";
    });
}

if (document.querySelector("div.arrow-down-title")) {
    document.querySelector("div.arrow-down-title").addEventListener("click", function () {
        stopAnimation();
        document.querySelector("div.wrapper").className = "wrapper fade";
        document.querySelector("div.arrow-left-container").className = "arrow-left-container button moveDownAll";
        document.querySelector("div.arrow-right-container").className = "arrow-right-container button moveDownAll";
        document.querySelector("div.arrow-up-container").className = "arrow-up-container button moveDownAllUp";

        document.querySelector("div.arrow-down").className = "arrow-down fadeIn";
        document.querySelector("div.arrow-down-title").className = "arrow-down-title fadeIn";
        document.querySelector("div.arrow-down-content").className = "arrow-down-content fadeOut";
    });
}

if (document.querySelector(".menu-icon")) {
    document.querySelector(".menu-icon").addEventListener("click", function () {
        document.querySelector(".menu").className = "menu fadeOutMenu";
    });
}

