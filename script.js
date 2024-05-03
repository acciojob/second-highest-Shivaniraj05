//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
			
			let len=arr.length;
			
			if(len === 1 ||  len === 0)  
			return -Infinity;
			
			if(checkSame(arr))
			return -Infinity;
			
			
			let max1=Math.max(arr[0], arr[1]), max2=Math.min(arr[0], arr[1]);
			  
			for(let i=2; i<len;i++){
			    if(arr[i] > max1){
			        max2=max1;
			        max1=arr[i];
			    }
			    
			    else if(arr[i] > max2){
			        max2=arr[i];
			    }
			}
			
			return max2; 

		}

        function checkSame(arr){
		    let first = arr[0];
		    
		    for(let i=1; i<arr.length;i++){
		        if(first !== arr[i])
		        return false;
		    }
		    
		    return true;
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];  
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();