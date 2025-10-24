# 🎨 3D Card Animations Guide

## ✨ Overview

I've added **10+ stunning 3D card animations** to your design system with purple/pink glow effects! All animations are hardware-accelerated and optimized for performance.

---

## 🎯 Available 3D Animations

### 1. **3D Tilt Effect** `.card-3d-tilt`
Subtle tilt and lift on hover with purple/pink glow.

```tsx
<div className="card card-3d-tilt">
  <h3>Tilting Card</h3>
  <p>Hover me to see the tilt effect!</p>
</div>
```

**Effect:** Rotates 5deg on X and Y axis, lifts up 8px

---

### 2. **3D Lift** `.card-3d-lift`
Smooth lift with scale and enhanced glow.

```tsx
<div className="card card-3d-lift">
  <h3>Lifting Card</h3>
  <p>I lift higher with a bouncy animation!</p>
</div>
```

**Effect:** Lifts 15px, scales to 1.02x, intense purple/pink glow

---

### 3. **3D Flip Card** `.card-flip`
Complete 180° flip on hover (for front/back content).

```tsx
<div className="card-flip card">
  <div className="card-flip-front">
    <h3>Front Side</h3>
  </div>
  <div className="card-flip-back absolute inset-0">
    <h3>Back Side</h3>
  </div>
</div>
```

**Effect:** Full card flip revealing back content

---

### 4. **3D Floating** `.card-3d-float`
Continuous floating animation with subtle rotation.

```tsx
<div className="card card-3d-float">
  <h3>Floating Card</h3>
  <p>I float and rotate automatically!</p>
</div>
```

**Effect:** Floats up/down 20px with gentle 3D rotation (6s loop)

---

### 5. **3D Perspective** `.card-3d-perspective`
Pops out toward viewer with scale.

```tsx
<div className="card card-3d-perspective">
  <h3>Perspective Card</h3>
  <p>I come toward you on hover!</p>
</div>
```

**Effect:** Moves 20px on Z-axis, scales 1.05x, massive glow

---

### 6. **3D Rotate** `.card-3d-rotate`
Elegant rotation on multiple axes.

```tsx
<div className="card card-3d-rotate">
  <h3>Rotating Card</h3>
  <p>I rotate smoothly in 3D space!</p>
</div>
```

**Effect:** Rotates 10deg Y-axis, -5deg X-axis

---

### 7. **3D Bounce** `.card-3d-bounce`
Playful bounce animation on hover.

```tsx
<div className="card card-3d-bounce">
  <h3>Bouncing Card</h3>
  <p>Watch me bounce!</p>
</div>
```

**Effect:** Bounces with 3D rotation (0.8s animation)

---

### 8. **3D Glow Pulse** `.card-3d-glow`
Continuous pulsing purple/pink glow (no hover needed).

```tsx
<div className="card card-3d-glow">
  <h3>Glowing Card</h3>
  <p>I pulse with magical glow!</p>
</div>
```

**Effect:** Glow intensity pulses (3s loop)

---

### 9. **3D Shimmer** `.card-3d-shimmer`
Light sweep effect on hover.

```tsx
<div className="card card-3d-shimmer">
  <h3>Shimmering Card</h3>
  <p>Hover to see the shimmer!</p>
</div>
```

**Effect:** Light sweeps across diagonally

---

### 10. **Depth Layers**
Create layered 3D depth within cards.

```tsx
<div className="card card-3d-tilt preserve-3d">
  <div className="card-layer-1">
    <h3>Title (Front Layer)</h3>
  </div>
  <div className="card-layer-2">
    <p>Description (Middle Layer)</p>
  </div>
  <div className="card-layer-3">
    <button>Button (Top Layer)</button>
  </div>
</div>
```

**Effect:** Elements appear at different Z depths

---

## 🎨 Complete Examples

### Example 1: Feature Card with Tilt
```tsx
<div className="perspective-container">
  <div className="card card-3d-tilt hover:border-purple-500/50">
    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
      <Zap className="w-6 h-6 text-purple-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Fast Verification</h3>
    <p className="text-gray-400">Instant blockchain verification in seconds</p>
  </div>
</div>
```

### Example 2: Pricing Card with Lift
```tsx
<div className="perspective-container">
  <div className="card card-3d-lift">
    <h3 className="text-2xl font-bold gradient-text mb-4">Pro Plan</h3>
    <p className="text-5xl font-bold text-white mb-6">$29<span className="text-lg">/mo</span></p>
    <ul className="space-y-2 mb-6">
      <li className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-400" />
        <span>Unlimited credentials</span>
      </li>
    </ul>
    <button className="btn-primary w-full">Get Started</button>
  </div>
</div>
```

### Example 3: Stat Card with Glow
```tsx
<div className="card card-3d-glow text-center">
  <p className="text-5xl font-bold text-white mb-2">10,000+</p>
  <p className="text-gray-400">Credentials Issued</p>
</div>
```

### Example 4: Interactive Dashboard Card
```tsx
<div className="perspective-container-far">
  <div className="card card-3d-perspective card-3d-shimmer">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-bold text-white">Recent Activity</h3>
      <TrendingUp className="w-5 h-5 text-green-400" />
    </div>
    <p className="text-3xl font-bold text-white mb-2">+15%</p>
    <p className="text-sm text-gray-400">vs last month</p>
  </div>
</div>
```

### Example 5: Floating Hero Icon
```tsx
<div className="w-20 h-20 card card-3d-float bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
  <Shield className="w-10 h-10 text-white" />
</div>
```

---

## 🎯 Combination Guide

### Maximum Impact (All Effects)
```tsx
<div className="perspective-container">
  <div className="card card-3d-tilt card-3d-shimmer hover:border-purple-500/50">
    {/* Content */}
  </div>
</div>
```

### Subtle & Professional
```tsx
<div className="card card-3d-lift">
  {/* Content */}
</div>
```

### Eye-Catching Hero
```tsx
<div className="card card-3d-float card-3d-glow">
  {/* Content */}
</div>
```

### Interactive Dashboard
```tsx
<div className="perspective-container-far">
  <div className="card card-3d-perspective card-3d-bounce">
    {/* Content */}
  </div>
</div>
```

---

## 🎨 Apply to Existing Components

### Update FeaturesPage Cards
```tsx
// Before
<div className="card">

// After
<div className="perspective-container">
  <div className="card card-3d-tilt card-3d-shimmer">
```

### Update Home Page Feature Cards
```tsx
// Add to each feature card
<motion.div 
  className="perspective-container"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
>
  <div className="card card-3d-lift hover:border-purple-500/50">
    {/* existing content */}
  </div>
</motion.div>
```

### Update CompanyPortal Analytics
```tsx
// Analytics stat cards
<div className="card card-3d-glow card-3d-tilt hover:border-purple-500/50">
  {/* stats content */}
</div>
```

---

## ⚡ Performance Tips

1. **Wrap in perspective container** for better 3D rendering:
   ```tsx
   <div className="perspective-container">
     <div className="card card-3d-tilt">
   ```

2. **Don't overuse** - Use 3D effects strategically:
   - Hero sections: `card-3d-float`
   - Feature cards: `card-3d-tilt` or `card-3d-lift`
   - Stats: `card-3d-glow`
   - Interactive elements: `card-3d-perspective`

3. **Combine wisely**:
   - ✅ Good: `card-3d-tilt` + `card-3d-shimmer`
   - ✅ Good: `card-3d-lift` + `hover:border-purple-500/50`
   - ❌ Avoid: Multiple animations on same card

4. **Use preserve-3d** for layered depth:
   ```tsx
   <div className="card preserve-3d">
     <div className="card-layer-1">Front</div>
     <div className="card-layer-2">Middle</div>
     <div className="card-layer-3">Back</div>
   </div>
   ```

---

## 🎨 Color Glow Variations

All animations use purple/pink glows by default. The shadow colors are:
- **Purple glow**: `rgba(168, 85, 247, 0.3-0.5)`
- **Pink glow**: `rgba(236, 72, 153, 0.2-0.4)`

These match your CollabChain purple/pink theme perfectly!

---

## 🚀 Quick Start

1. **Simple Tilt Card:**
   ```tsx
   <div className="card card-3d-tilt">Your content</div>
   ```

2. **Floating Icon:**
   ```tsx
   <div className="card-3d-float card-3d-glow">
     <YourIcon />
   </div>
   ```

3. **Premium Feature Card:**
   ```tsx
   <div className="perspective-container">
     <div className="card card-3d-lift card-3d-shimmer">
       Your feature content
     </div>
   </div>
   ```

---

## 🎯 Where to Apply

### High Priority
- ✅ Home page feature cards (`card-3d-tilt`)
- ✅ Hero section icons (`card-3d-float`)
- ✅ Pricing cards (`card-3d-lift`)
- ✅ Dashboard stats (`card-3d-glow`)

### Medium Priority
- ✅ Benefits cards (`card-3d-perspective`)
- ✅ How It Works steps (`card-3d-rotate`)
- ✅ Team member cards (`card-3d-tilt`)

### Nice to Have
- ✅ Footer links hover (`card-3d-bounce`)
- ✅ Logo animations (`card-3d-float`)
- ✅ Call-to-action buttons (shimmer effect)

---

## 🎉 Result

Your cards will now have:
✨ **Stunning 3D depth**  
✨ **Purple/pink glow effects**  
✨ **Smooth, professional animations**  
✨ **Hardware-accelerated performance**  
✨ **Perfect theme integration**  

**Try them out and see the magic! 🚀**
