const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        let phase = 0;
        let showGridNumbers = true;
        let speed = 10;

        function draw() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid lines
            ctx.beginPath();
            ctx.strokeStyle = '#ccc';
            for (let x = 0; x <= width; x += 20) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                if (showGridNumbers) {
                    ctx.fillStyle = 'black';
                    ctx.fillText(x, x, height / 2 + 10);
                }
            }
            for (let y = 0; y <= height; y += 20) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                if (showGridNumbers) {
                    ctx.fillStyle = 'black';
                    ctx.fillText(y, width / 2 + 10, y);
                }
            }
            ctx.stroke();

            // Draw x and y axes
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.moveTo(width / 2, 0);
            ctx.lineTo(width / 2, height);
            ctx.stroke();

            // Plot sine function
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.moveTo(0, height / 2);
            for (let x = 0; x < width; x++) {
                let y = Math.sin((x - width / 2 + phase) * 0.1) * 50 + height / 2;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Update phase for animation based on speed
            phase += speed / 10;

            // Request next frame
            requestAnimationFrame(draw);
        }

        // Start the animation
        draw();

        // Toggle grid numbers button
        const toggleGridBtn = document.getElementById('toggleGridBtn');
        toggleGridBtn.addEventListener('click', () => {
            showGridNumbers = !showGridNumbers;
        });

        // Speed slider
        const speedSlider = document.getElementById('speedSlider');
        speedSlider.addEventListener('input', () => {
            speed = parseInt(speedSlider.value);
        });