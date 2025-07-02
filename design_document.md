# C'Groovy Website Design Document

## Website Structure
- **Root Directory**: Contains all HTML pages and subdirectories
- **Subdirectories**:
  - `/css`: External CSS files
  - `/js`: JavaScript files
  - `/images`: Image assets
  - `/audio`: Audio files for song playback
  - `/fonts`: Custom fonts (if needed)

## Pages Design

### 1. Home Page (index.html)
- **Header**: Logo, navigation menu with dropdown
- **Hero Section**: Large banner with UVP (Unique Value Proposition)
- **Image Slider**: jQuery-powered slider showing recommended songs
- **Best Seller Section**: Grid of best-selling songs
- **Footer**: Copyright, social links, quick links

### 2. About Us Page (about.html)
- **Header**: Same as home page
- **History Section**: Timeline of C'Groovy's journey since 2016
- **Team Section**: Core team members with photos, names, and positions
- **Mission & Vision**: Company's mission and vision statements
- **Footer**: Same as home page

### 3. Song Collection Page (collection.html)
- **Header**: Same as home page
- **Genre Tabs/Sections**: 
  - Pop section
  - R&B section
  - K-Pop section
- **Song Cards**: Each card shows:
  - Song name
  - Artist
  - Short description
  - Link to song detail page
- **Footer**: Same as home page

### 4. Song Detail Page (detail.html)
- **Header**: Same as home page
- **Song Information**:
  - Song name
  - Artist
  - Full description
  - Cover image
- **Audio Player**: Custom audio player with controls
- **Lyrics Section**: Full lyrics with scrollable area
- **Related Songs**: Suggestions for similar songs
- **Footer**: Same as home page

### 5. Register Page (register.html)
- **Header**: Same as home page
- **Registration Form**:
  - Name input (text)
  - Email input (email)
  - Password input (password)
  - Age input (number)
  - Gender selection (radio buttons)
  - Terms & conditions checkbox
  - Submit button
- **Form Validation**: JavaScript validation for all fields
- **Footer**: Same as home page

## Design Elements

### Color Scheme
- Primary: #6200EA (Deep Purple)
- Secondary: #03DAC6 (Teal)
- Accent: #FF3D00 (Orange)
- Text: #212121 (Dark Gray)
- Background: #FFFFFF (White)
- Secondary Background: #F5F5F5 (Light Gray)

### Typography
- Headings: 'Montserrat', sans-serif
- Body: 'Open Sans', sans-serif
- Accent: 'Poppins', sans-serif

### Responsive Breakpoints
- Desktop: > 800px
- Mobile: ≤ 800px

### Navigation
- Desktop: Horizontal menu with dropdown
- Mobile: Hamburger menu with slide-out navigation

## JavaScript Features
1. Form validation (5 types)
2. jQuery image slider
3. Audio player controls
4. Responsive navigation toggle
5. Genre filter for song collection

## CSS Features (5 types)
1. Flexbox layout
2. CSS Grid for song collections
3. CSS Transitions for hover effects
4. CSS Animations for loading elements
5. CSS Variables for consistent theming

## Responsive Design
- Meta viewport tag
- Media queries for screens below 800px
- Flexible images and media
- Responsive typography
- Mobile-first approach

## External Libraries
- jQuery (for slider and DOM manipulation)
- Font Awesome (for icons with proper attribution)
