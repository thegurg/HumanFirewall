# SPEC.md — HumanFirewall: Cyberpunk Phishing Defense Platform

## 1. Concept & Vision

**HumanFirewall** — это иммерсивная киберпанк-платформа для обучения киберграмотности. Визуальный стиль погружает пользователя в атмосферу Cyberpunk 2077: тёмный неоновый мир корпоративных угроз, где каждый пользователь — последняя линия обороны. Ощущение: ты — хакер, защищающий цифровой периметр в мрачном городе будущего.

## 2. Design Language

### Aesthetic Direction
Cyberpunk 2077 meets Blade Runner 2049 — глубокие тени, неоновые свечения, голографические интерфейсы, глитч-эффекты при ошибках, сканлайны как CRT-эффект.

### Color Palette
- **Primary**: #7C4DFF (Neon Purple)
- **Secondary**: #FF2DAA (Hot Pink)
- **Accent**: #00E5FF (Cyber Cyan)
- **Background Dark**: #0a0a0f
- **Background Gradient**: #0a0a0f → #1a1a2e
- **Surface**: #12121a
- **Text Primary**: #ffffff
- **Text Secondary**: #8b8b9e
- **Danger**: #ff3366
- **Success**: #00ff88
- **Warning**: #ffaa00

### Typography
- **Display/Headers**: 'Orbitron', sans-serif (futuristic, geometric)
- **Body**: 'Rajdhani', sans-serif (tech, readable)
- **Code/Terminal**: 'JetBrains Mono', monospace

### Spatial System
- Base unit: 8px
- Card padding: 24px
- Section gaps: 48px
- Border radius: 4px (sharp, technical)
- Neon borders: 2px solid with box-shadow glow

### Motion Philosophy
- **Glitch**: Random displacement + RGB split (2-3px) on errors/hover
- **Pulse**: Subtle glow oscillation (0.8s ease-in-out infinite)
- **Scan**: Horizontal line sweep (1.5s linear)
- **Holographic**: Rainbow gradient shift on cards (3s)
- **Typing**: Character-by-character for terminal text
- **Rain**: Continuous particle effect background

### Visual Assets
- Matrix rain canvas background
- Scanline overlay (CSS repeating gradient)
- SVG icons: shield, lock, eye, brain, skull, warning
- Cyber grid patterns
- Noise texture overlay

## 3. Layout & Structure

### Page Structure
Single-page application with 6 viewable screens via navigation:
1. **Hero** — Full viewport landing
2. **Scanner** — Split layout: input left, analysis right
3. **Training** — Card-based lesson module
4. **Dashboard** — Grid of metric cards
5. **Admin** — SOC-style monitoring dashboard
6. **Certificate** — Centered document mockup

### Navigation
- Fixed top navbar with blur backdrop
- Tab indicators with neon underline
- Mobile: hamburger with slide-out drawer

### Responsive Strategy
- Desktop: 1440px+ (full experience)
- Tablet: 768-1439px (stacked layouts)
- Mobile: <768px (single column, simplified effects)

## 4. Features & Interactions

### Screen 1: Hero
- Animated matrix rain background
- Glowing title with text-shadow layers
- Stats cards with holographic shimmer
- CTA buttons with hover glow intensification
- Parallax cybercity silhouette

### Screen 2: Phishing Scanner
- Textarea with animated border glow
- Real-time "analysis" progress bar
- Threat icons that animate in sequence
- Risk percentage with dramatic reveal
- "Dissect Attack" button with glitch on hover

### Screen 3: Training Module
- Slide carousel with fade transitions
- Fake email/phishing example display
- Interactive quiz with timer
- Progress ring with animated fill
- Success/error states with full-screen flash

### Screen 4: Personal Dashboard
- Central shield gauge (SVG circular progress)
- Skill badges with neon borders
- Terminal-style recommendations
- Topic progress bars
- Achievement unlocked animations

### Screen 5: Company Admin
- Heatmap grid (departments vs threats)
- Line chart with glowing data points
- Employee vulnerability table
- Radar scan button animation
- Real-time threat counter

### Screen 6: Certificate
- Holographic certificate frame
- Animated QR code
- Gold/cyber purple seal
- PDF mockup styling
- Verification badge

### Global Interactions
- All buttons: scale(1.02) + glow on hover
- Cards: subtle lift + border glow on hover
- Links: underline animation + color shift
- Focus states: double outline with glow

## 5. Component Inventory

### Button Primary
- Default: #7C4DFF bg, white text, 2px glow
- Hover: Increased glow, slight scale
- Active: Pressed effect, reduced glow
- Disabled: Grayscale, no glow, cursor not-allowed

### Button Secondary
- Default: Transparent, 2px #00E5FF border
- Hover: Cyan fill at 10% opacity
- Active: Cyan fill at 20%

### Card Holographic
- Default: Dark surface, rainbow gradient border
- Hover: Gradient animation speeds up
- Contains: Icon, title, metric

### Input Field
- Default: Dark bg, subtle border
- Focus: Neon purple border + glow
- Error: Red border + glitch shake

### Progress Bar
- Track: Dark with subtle grid
- Fill: Gradient purple-pink with animated shine

### Navigation Tab
- Default: Muted text
- Active: Neon underline, bright text
- Hover: Text brightens

### Threat Badge
- Low: Cyan
- Medium: Yellow
- High: Red with pulse

### Terminal Block
- Black bg with green/cyan text
- Blinking cursor
- Monospace font

## 6. Technical Approach

### Stack
- Single HTML file with embedded CSS and JavaScript
- Vanilla JS for interactions (no framework needed)
- CSS animations and transitions for performance
- Canvas API for matrix rain effect
- SVG for icons and gauges

### Architecture
- CSS custom properties for theming
- BEM-like class naming
- Intersection Observer for scroll animations
- RequestAnimationFrame for canvas

### Performance
- Debounced resize handlers
- CSS containment for complex animations
- will-change hints for animated elements
- Reduced motion media query support
