$(document).ready(
	function () {

		$("#education").hide();
		$("#work").hide();
		$("#interest").hide();
		$("#contact").hide();


		$("#education_tab").click(function(){
			$("#work").hide();
			$("#interest").hide();
			$("#contact").hide();
			$("#whatido").hide();
			$("#education").css('font-size','1.2em');
			$("#education").show(2000);

			
			
		})

		$("#work_tab").click(function(){
			$("#interest").hide();
			$("#contact").hide();
			$("#whatido").hide();
			$("#education").hide();
			$("#work").css('font-size','1.2em');
			$("#work").show(2000);
			
		})

		$("#interet_tab").click(function(){
			$("#whatido").hide();
			$("#education").hide();
			$("#work").hide()
			$("#contact").hide();
			$("#interest").css('font-size','1.2em');
			$("#interest").show(2000);
		})

		$("#contact_tab").click(function(){
			$("#whatido").hide();
			$("#education").hide();
			$("#work").hide()
			$("#interest").hide();
			$("#contact").css('font-size','1.2em');
			$("#contact").show(2000);
		})


	}
);