$(function(){$("#contact").click(function(){$("#contactForm").fadeToggle()}),$(document).mouseup(function(t){var c=$("#contactForm");c.is(t.target)||0!==c.has(t.target).length||c.fadeOut()})});