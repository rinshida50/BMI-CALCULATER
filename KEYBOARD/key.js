        // --- JS Functions ---
        const displayData = (data) => {
            const display = document.getElementById('output');
            display.value += data;
        }

        const allClear = () => {
            const display = document.getElementById('output');
            display.value = "";
            display.placeholder = "0";
        }

        const removeItem = () => {
            const display = document.getElementById("output");
            display.value = display.value.slice(0, -1);
        }

        const showSpace = () => {
            document.getElementById("output").value += " ";
        }

        const addText = (value) => {
            const output = document.getElementById("output");
            if (value === "ENTER") {
                output.value += "\n";
            } else {
                output.value += value;
            }
        }

        const showResult = () => {
            const display = document.getElementById("output");
            try {
                display.value = eval(display.value);
            } catch (err) {
                display.value = "";
                display.placeholder 
            }
        }
