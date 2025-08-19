const express = require('express');
const path = require('path');
const { inject } = require('@vercel/analytics'); // Use CommonJS import
const { injectSpeedInsights } = require('@vercel/speed-insights');
const app = express();
const port = process.env.PORT || 3000;



// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the "public" directory
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Catch all requests and serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(publicDir, 'robots.txt'));
});

// Serve the dynamically generated sitemap
app.get('/sitemap.xml', (req, res) => {
  const sitemapHandler = require('./public/api/sitemap.xml');
  sitemapHandler(req, res);
});

app.use((req, res, next) => {
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mukund Enterprises - Premium Mustard Oil Manufacturer</title>
    <meta name="description" content="Mukund Enterprises - Producers of high-quality mustard oil with 60 metric ton daily production capacity. Specializing in cold-pressed, organic mustard oil since 1985.">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --primary-color: #f5a623;
            --secondary-color: #8b5a2b;
            --accent-color: #e67e22;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .hero {
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://placehold.co/1920x1080);
            background-size: cover;
            background-position: center;
        }
        
        .process-step:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .quality-badge {
            position: absolute;
            top: -10px;
            right: -10px;
        }
    </style>
</head>
<body>
    <!-- Header with Navigation -->
    <header class="bg-white shadow-md fixed w-full z-50">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center">
                <div class="mr-8">
                    <img src="https://placehold.co/180x60?text=Mukund+Enterprises" alt="Mukund Enterprises logo with golden mustard plant illustration and elegant typography" class="h-12">
                </div>
                <nav class="hidden md:flex space-x-8">
                    <a href="#home" class="text-gray-800 hover:text-amber-600 font-medium transition duration-300">Home</a>
                    <a href="#about" class="text-gray-800 hover:text-amber-600 font-medium transition duration-300">About Us</a>
                    <a href="#products" class="text-gray-800 hover:text-amber-600 font-medium transition duration-300">Products</a>
                    <a href="#process" class="text-gray-800 hover:text-amber-600 font-medium transition duration-300">Our Process</a>
                    <a href="#contact" class="text-gray-800 hover:text-amber-600 font-medium transition duration-300">Contact</a>
                </nav>
            </div>
            <div>
                <a href="#contact" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 shadow-md">Get Quote</a>
            </div>
            <button class="md:hidden text-gray-800 focus:outline-none">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero h-screen flex items-center justify-center text-white pt-16">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Premium Mustard Oil Production <span class="text-amber-400">Since 1985</span></h1>
            <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">Producing 60 metric tons of high-quality mustard oil daily with traditional values and modern technology</p>
            <div class="flex flex-col md:flex-row justify-center gap-4">
                <a href="#products" class="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 text-lg shadow-lg">Our Products</a>
                <a href="#contact" class="bg-transparent hover:bg-white hover:text-amber-800 border-2 border-white text-white px-8 py-3 rounded-full font-medium transition duration-300 text-lg shadow-lg">Contact Us</a>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-white py-16 shadow-inner">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div class="p-6">
                    <h3 class="text-4xl font-bold text-amber-600 mb-2">38+</h3>
                    <p class="text-gray-600">Years in Business</p>
                </div>
                <div class="p-6">
                    <h3 class="text-4xl font-bold text-amber-600 mb-2">60</h3>
                    <p class="text-gray-600">Metric Tons Daily</p>
                </div>
                <div class="p-6">
                    <h3 class="text-4xl font-bold text-amber-600 mb-2">100%</h3>
                    <p class="text-gray-600">Pure Mustard Oil</p>
                </div>
                <div class="p-6">
                    <h3 class="text-4xl font-bold text-amber-600 mb-2">500+</h3>
                    <p class="text-gray-600">Happy Clients</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <img src="https://placehold.co/600x400" alt="Mukund Enterprises manufacturing facility exterior showing modern industrial plant with mustard fields in background" class="rounded-lg shadow-xl">
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">About <span class="text-amber-600">Mukund Enterprises</span></h2>
                    <p class="text-lg mb-6">Founded in 1985, Mukund Enterprises has grown from a small family-run business to becoming one of the leading mustard oil manufacturers in the region, with a state-of-the-art facility capable of processing 60 metric tons daily.</p>
                    <p class="text-lg mb-6">We combine traditional cold-pressing techniques with modern food safety standards to produce high-quality mustard oil that preserves all the natural nutrients and authentic flavor.</p>
                    <ul class="space-y-2 mb-8">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Family-owned and operated for three generations</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>ISO 9001 and FSSAI certified manufacturing facility</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Sustainable sourcing from local mustard farmers</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Our <span class="text-amber-600">Premium Products</span></h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">We offer a range of mustard oil products catering to both culinary and therapeutic needs.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Product 1 -->
                <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 relative">
                    <div class="quality-badge bg-amber-600 text-white px-4 py-1 rounded-full font-bold text-xs">FSSAI Certified</div>
                    <div class="p-6">
                        <img src="https://placehold.co/400x300" alt="Golden mustard oil bottle with premium packaging and label showing purity claims" class="w-full h-48 object-contain mb-6">
                        <h3 class="text-xl font-bold mb-2">Cold-Pressed Mustard Oil</h3>
                        <p class="text-gray-600 mb-4">Extracted at low temperatures to preserve nutrients, aroma, and flavor. Perfect for authentic Indian cuisine.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-lg">₹150/L</span>
                            <a href="#contact" class="text-amber-600 hover:text-amber-800 font-medium">Order Now</a>
                        </div>
                    </div>
                </div>
                
                <!-- Product 2 -->
                <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 relative">
                    <div class="quality-badge bg-amber-600 text-white px-4 py-1 rounded-full font-bold text-xs">Organic</div>
                    <div class="p-6">
                        <img src="https://placehold.co/400x300" alt="Organic mustard oil in glass bottle with green label indicating organic certification" class="w-full h-48 object-contain mb-6">
                        <h3 class="text-xl font-bold mb-2">Organic Mustard Oil</h3>
                        <p class="text-gray-600 mb-4">Made from organically grown mustard seeds without chemical fertilizers or pesticides. Certified organic.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-lg">₹220/L</span>
                            <a href="#contact" class="text-amber-600 hover:text-amber-800 font-medium">Order Now</a>
                        </div>
                    </div>
                </div>
                
                <!-- Product 3 -->
                <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 relative">
                    <div class="quality-badge bg-amber-600 text-white px-4 py-1 rounded-full font-bold text-xs">Premium</div>
                    <div class="p-6">
                        <img src="https://placehold.co/400x300" alt="Rediffusion filtered premium mustard oil in frosted glass bottle with elegant packaging" class="w-full h-48 object-contain mb-6">
                        <h3 class="text-xl font-bold mb-2">Filtered Mustard Oil</h3>
                        <p class="text-gray-600 mb-4">Ultra-filtered for purity with lower smoke point, ideal for frying and deep frying applications.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-lg">₹180/L</span>
                            <a href="#contact" class="text-amber-600 hover:text-amber-800 font-medium">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <p class="text-lg mb-6">Looking for bulk quantities or customized packaging?</p>
                <a href="#contact" class="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 inline-block shadow-md">Contact for Bulk Orders</a>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Our <span class="text-amber-600">Production Process</span></h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">From seed to bottle - maintaining quality at every step</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Step 1 -->
                <div class="process-step bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div class="flex items-center mb-4">
                        <div class="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">1</div>
                        <h3 class="text-xl font-bold">Seed Selection</h3>
                    </div>
                    <p class="text-gray-600">We source the finest quality mustard seeds from trusted farmers, testing for moisture content and purity before processing.</p>
                    <img src="https://placehold.co/400x300" alt="High quality mustard seeds being inspected for purity and moisture content" class="mt-4 rounded w-full">
                </div>
                
                <!-- Step 2 -->
                <div class="process-step bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div class="flex items-center mb-4">
                        <div class="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">2</div>
                        <h3 class="text-xl font-bold">Cold Pressing</h3>
                    </div>
                    <p class="text-gray-600">Using traditional wooden ghani presses at controlled temperatures to extract oil while preserving nutrients and flavor.</p>
                    <img src="https://placehold.co/400x300" alt="Traditional wooden mustard oil presses in operation at Mukund Enterprises facility" class="mt-4 rounded w-full">
                </div>
                
                <!-- Step 3 -->
                <div class="process-step bg-white p-6 rounded-lg shadow-md transition duration-300">
                    <div class="flex items-center mb-4">
                        <div class="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">3</div>
                        <h3 class="text-xl font-bold">Filtration & Packaging</h3>
                    </div>
                    <p class="text-gray-600">Multiple filtration stages ensure purity before the oil is packaged in food-grade containers under strict hygiene standards.</p>
                    <img src="https://placehold.co/400x300" alt="Automated bottling and packaging line at Mukund Enterprises filling mustard oil bottles" class="mt-4 rounded w-full">
                </div>
            </div>
        </div>
    </section>

    <!-- Quality Assurance -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <img src="https://placehold.co/600x400" alt="Quality control laboratory at Mukund Enterprises with technicians testing mustard oil samples" class="rounded-lg shadow-xl">
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Quality <span class="text-amber-600">Assurance</span></h2>
                    <p class="text-lg mb-6">At Mukund Enterprises, we implement rigorous quality control measures at every stage of production to ensure our mustard oil meets the highest standards.</p>
                    
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-bold text-lg mb-2">Laboratory Testing</h4>
                            <p class="text-gray-600">Our in-house laboratory conducts regular tests for purity, acidity, and nutritional content following FSSAI guidelines.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-2">Certifications</h4>
                            <div class="flex flex-wrap gap-4 mt-2">
                                <img src="https://placehold.co/100x60" alt="FSSAI certification logo" class="h-12">
                                <img src="https://placehold.co/100x60" alt="ISO 9001 certification logo" class="h-12">
                                <img src="https://placehold.co/100x60" alt="APEDA certification logo" class="h-12">
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-2">Traceability</h4>
                            <p class="text-gray-600">Every batch is assigned a unique code for complete traceability from farm to final product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our <span class="text-amber-600">Clients Say</span></h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Trusted by restaurants, food processors, and households across the country</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <img src="https://placehold.co/60x60" alt="Portrait of Ramesh Sharma, Director of Sharma Restaurants" class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-bold">Ramesh Sharma</h4>
                            <p class="text-sm text-gray-500">Director, Sharma Restaurants</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"For over 15 years, Mukund Enterprises has been our trusted supplier for mustard oil. Their consistent quality and reliable delivery make them our first choice."</p>
                    <div class="flex mt-2 text-amber-400">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <img src="https://placehold.co/60x60" alt="Portrait of Priya Mehta, Owner of Priya Food Products" class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-bold">Priya Mehta</h4>
                            <p class="text-sm text-gray-500">Owner, Priya Food Products</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"The rich aroma and perfect flavor profile of Mukund's mustard oil make our pickles stand out in the market. Their bulk ordering options are very convenient."</p>
                    <div class="flex mt-2 text-amber-400">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <img src="https://placehold.co/60x60" alt="Portrait of Anil Gupta, Head Chef at Spice of India" class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-bold">Anil Gupta</h4>
                            <p class="text-sm text-gray-500">Head Chef, Spice of India</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"As a chef, I appreciate the purity and authentic taste of Mukund's mustard oil. It makes all the difference in our Bengali and North Indian dishes."</p>
                    <div class="flex mt-2 text-amber-400">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Get In <span class="text-amber-600">Touch</span></h2>
                    <p class="text-lg mb-8">Have questions about our products or want to place an order? Our team is ready to assist you.</p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-amber-100 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">Phone</h4>
                                <p class="text-gray-600">+91 98765 43210 (Sales)</p>
                                <p class="text-gray-600">+91 98765 43211 (Support)</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-amber-100 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">Email</h4>
                                <p class="text-gray-600">sales@mukundenterprises.com</p>
                                <p class="text-gray-600">support@mukundenterprises.com</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-amber-100 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">Address</h4>
                                <p class="text-gray-600">Industrial Area, Phase II</p>
                                <p class="text-gray-600">G.T. Road, Ghaziabad</p>
                                <p class="text-gray-600">Uttar Pradesh - 201009, India</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8">
                        <h4 class="font-bold text-lg mb-4">Business Hours</h4>
                        <div class="flex justify-between border-b border-gray-200 py-2">
                            <span>Monday - Friday</span>
                            <span class="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-200 py-2">
                            <span>Saturday</span>
                            <span class="font-medium">9:00 AM - 2:00 PM</span>
                        </div>
                        <div class="flex justify-between py-2">
                            <span>Sunday</span>
                            <span class="font-medium">Closed</span>
                        </div>
                    </div>
                </div>
                
                <div class="md:w-1/2">
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h3 class="text-2xl font-bold mb-6">Send Us a Message</h3>
                        <form id="contactForm" class="space-y-4">
                            <div>
                                <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                                <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                            </div>
                            <div>
                                <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                            </div>
                            <div>
                                <label for="phone" class="block text-gray-700 font-medium mb-2">Phone</label>
                                <input type="tel" id="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                            </div>
                            <div>
                                <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                                <select id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                                    <option value="">Select an option</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="bulk">Bulk Order Inquiry</option>
                                    <option value="distributor">Become a Distributor</option>
                                    <option value="feedback">Feedback</option>
                                </select>
                            </div>
                            <div>
                                <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 shadow-md">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <div class="h-96 w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1376214547457!2d77.44994341508418!3d28.615123982422107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef4f6b3b3b3b%3A0x4b1c7b1c1c1c1c1c!2sIndustrial%20Area%2C%20Phase%20II%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" title="Map showing location of Mukund Enterprises in Ghaziabad"></iframe>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img src="https://placehold.co/180x60?text=Mukund+Enterprises" alt="Mukund Enterprises logo with golden mustard plant illustration and elegant typography" class="h-12 mb-6">
                    <p class="mb-6">Manufacturers of premium quality mustard oil since 1985. Serving customers across India with authentic, pure mustard oil.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                        <li><a href="#products" class="text-gray-400 hover:text-white transition duration-300">Products</a></li>
                        <li><a href="#process" class="text-gray-400 hover:text-white transition duration-300">Our Process</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6">Products</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Cold-Pressed Mustard Oil</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Organic Mustard Oil</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Filtered Mustard Oil</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Bulk Packaging</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Private Labeling</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6">Newsletter</h4>
                    <p class="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                    <form class="flex">
                        <input type="email" placeholder="Your email" class="px-4 py-2 rounded-l-md focus:outline-none bg-gray-800 text-white w-full">
                        <button type="submit" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md focus:outline-none">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 mb-4 md:mb-0">© 2023 Mukund Enterprises. All rights reserved.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
                    <a href="#" class="text-gray-400 hover:text-white transition duration-300">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Mob`);
});
module.exports = app;