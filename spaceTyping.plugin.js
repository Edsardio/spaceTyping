//META{"name":"spaceTyping"}*//
'use strict';
function spaceTyping() {
	const
		_=this,
		init = function () {
			$(function () {
				var textarea = $(".channel-textarea-inner").find("textarea")[0];
				textarea.setAttribute('id', 'text_input_area');
				$("#text_input_area").off("input");
				$("#text_input_area").addClass('native-key-bindings');
				$("#text_input_area").on('input', function (e) {
					if (e.target.value.startsWith("/space")) {
						$("#text_input_area").one('keydown', function (event) {
							var keycode = event.keyCode;
						
							if (keycode == 13) {
								e.target.value = e.target.value.slice(6);
							}
							else if (
								(keycode > 47 && keycode < 58)   || // number keys
								keycode == 32 || keycode == 13   || // spacebar & return key(s) (if you want to allow carriage returns)
								(keycode > 64 && keycode < 91)   || // letter keys
								(keycode > 95 && keycode < 112)  || // numpad keys
								(keycode > 185 && keycode < 193) || // ;=,-./` (in order)
								(keycode > 218 && keycode < 223)   // [\]' (in order)
							) {
								e.target.value = e.target.value + " ";
							}
							else if (keycode == 8) {
								if (e.target.value.length > 6) {
									e.target.value = e.target.value.slice(0, -1);
								}
							}
						});
					}
				});
			});
		};
	_.getName=()=>'spaceTyping';
	_.getDescription=()=>'Type with spaces';
	_.getVersion=()=>'1';
	_.getAuthor=()=>'Apensnitzel';
	_.load=function(){
		init();
	};
	_.start=function() {
		init();
	}
	_.onSwitch=function() {
		init();
	}
}

