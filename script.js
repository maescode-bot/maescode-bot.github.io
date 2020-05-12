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
			$("#education").show(2000);
			
			
		})

		$("#work_tab").click(function(){
			$("#interest").hide();
			$("#contact").hide();
			$("#whatido").hide();
			$("#education").hide();
			$("#work").show(2000);
			
		})

		$("#interet_tab").click(function(){
			$("#whatido").hide();
			$("#education").hide();
			$("#work").hide()
			$("#contact").hide();
			$("#interest").show(2000);
		})

		$("#contact_tab").click(function(){
			$("#whatido").hide();
			$("#education").hide();
			$("#work").hide()
			$("#interest").hide();
			$("#contact").show(2000);
		})


	}
);