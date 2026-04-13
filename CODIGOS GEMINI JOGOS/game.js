const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 1. Classe do Inimigo
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 100;
        this.speed = 2;
    }
    update() {
        this.x += this.speed; // Move para a direita por enquanto
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
        ctx.fill();
    }
}

// 2. Classe da Torre
class Tower {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.range = 150;
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x - 20, this.y - 20, 40, 40);
        // Desenha o alcance (opcional)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.range, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();
    }
}

const enemies = [new Enemy(0, 300)];
const towers = [new Tower(400, 300)];

// 3. Loop Principal
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela

    enemies.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });

    towers.forEach(tower => {
        tower.draw();
    });

    requestAnimationFrame(animate);
}

animate();