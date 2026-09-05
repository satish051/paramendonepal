import express from 'express';

const router = express.Router();

// Mock data for dashboard
router.get('/stats', (req, res) => {
  res.json({
    stats: [
      { name: 'Total Blog Posts', value: '12', trend: '+2 this month' },
      { name: 'Unread Messages', value: '4', trend: 'Requires attention' },
      { name: 'Website Views', value: '1,204', trend: '+18% from last week' },
      { name: 'Active Users', value: '328', trend: '+5% from last week' }
    ]
  });
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running correctly' });
});

// --- Blog Endpoints ---

// In-memory database for blogs (temporary until DB is added)
let blogs = [
  { 
    id: 1, 
    title: 'The Future of Recycling in Nepal', 
    date: '2024-10-15', 
    status: 'Published', 
    content: 'Recycling in Nepal is taking a new turn with community initiatives...',
    excerpt: 'Discover how local communities are driving the new wave of recycling in Nepal.',
    author: 'Paramendo Team',
    category: 'Innovation',
    image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    id: 2, 
    title: 'How We Process Plastic Waste', 
    date: '2024-11-02', 
    status: 'Published', 
    content: 'We collect HDPE and PP plastics, wash them, and shred them into granules...',
    excerpt: 'A deep dive into our manufacturing process that turns waste into durable tiles.',
    author: 'Operations',
    category: 'Process',
    image: 'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    id: 3, 
    title: 'New Community Initiatives', 
    date: '2024-11-20', 
    status: 'Draft', 
    content: 'Our upcoming projects in Dhading...',
    excerpt: 'Upcoming projects aiming to empower the Dhading community.',
    author: 'Community Outreach',
    category: 'Community',
    image: 'https://images.pexels.com/photos/3182512/pexels-photo-3182512.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];
let nextId = 4;

// Get all blogs
router.get('/blogs', (req, res) => {
  res.json(blogs);
});

// Get a single blog by ID
router.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Create a new blog
router.post('/blogs', (req, res) => {
  const { title, status, content, excerpt, author, category, image, externalLink } = req.body;
  const newBlog = {
    id: nextId++,
    title: title || 'Untitled Blog',
    date: new Date().toISOString().split('T')[0],
    status: status || 'Draft',
    content: content || '',
    excerpt: excerpt || '',
    author: author || 'Admin',
    category: category || 'Uncategorized',
    image: image || 'https://images.pexels.com/photos/1250283/pexels-photo-1250283.jpeg?auto=compress&cs=tinysrgb&w=800',
    externalLink: externalLink || ''
  };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// Update a blog
router.put('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex(b => b.id === id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...req.body };
    res.json(blogs[index]);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Delete a blog
router.delete('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  blogs = blogs.filter(b => b.id !== id);
  res.status(204).send();
});

// --- Content Endpoints ---
let siteContent = {
  hero: {
    title: "Turning Himalayan Plastic Waste into Sustainable Value",
    subtitle: "Paramendo Nepal builds community-centric circular economies by upcycling high-density plastics and multi-layered waste into premium recycled boards, structural materials, and eco-friendly products."
  },
  impactMetrics: {
    badge: "Verified Impact",
    title: "Measurable Change, Real-World Value",
    metrics: [
      {
        id: 1,
        title: 'Plastic Waste Diverted',
        value: '10,000+ kg',
        description: 'Low-value plastics collected across remote high-altitude regions including Ree Village & Ruby Valley.',
      },
      {
        id: 2,
        title: 'Recycled Polymer Types',
        value: 'HDPE, PP & MLP',
        description: 'Upcycling multi-layered and rigid plastics that standard recyclers usually reject.',
      },
      {
        id: 3,
        title: 'Community Reach',
        value: 'Mountain Ecosystems',
        description: 'Local collection models providing income and environmental protection to remote Himalayan villages.',
      }
    ]
  },
  homeProducts: {
    title: "Our Products",
    subtitle: "Premium recycled boards, structural materials, and eco-friendly products made from high-density plastics and multi-layered waste.",
    products: [
      {
        id: 1,
        title: "Recycled HDPE Boards",
        description: "Heavy-duty boards designed to replace traditional timber and plywood."
      },
      {
        id: 2,
        title: "Eco-Friendly Furniture",
        description: "Sustainable furniture pieces crafted from upcycled multi-layered plastics."
      },
      {
        id: 3,
        title: "\"Carry Everest\" Souvenirs",
        description: "Premium eco-friendly mountain souvenirs supporting local communities."
      }
    ]
  },
  partners: {
    title: "Our Awesome Partners",
    subtitle: "Teaming up with incredible organizations to make Nepal cleaner and greener!",
    logos: [
      { id: 1, name: "Prarambha", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images.jpeg" },
      { id: 2, name: "Partner 2", url: "https://paramendonepal.com/wp-content/uploads/2024/07/2-1.png" },
      { id: 3, name: "Partner 3", url: "https://paramendonepal.com/wp-content/uploads/2024/07/download-2.png" },
      { id: 4, name: "Partner 4", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images-1.png" },
      { id: 5, name: "Partner 5", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images-2.png" }
    ]
  },
  impactInsights: {
    title: "Impact & Insights",
    subtitle: "Watch how we are transforming plastic waste into sustainable solutions and building circular economies in remote Himalayan villages. Stay up to date with our newest recycling innovations, community stories, and environmental milestones."
  },
  sdg: {
    title: "Our Commitment To UN Sustainable Development Goals",
    paragraph1: "Paramendo Nepal activities are focused on adding value to the Triple Bottom Line of 'People, Planet and Prosperity', thereby creating an entity that can truly achieve a Net Positive Impact.",
    paragraph2: "With the United Nation's Sustainable Development Goals serving as a guiding light, all our activities have a positive environmental and social impact on individuals and communities across Nepal."
  },
  transformation: {
    title: "The Transformation",
    subtitle: "Drag the slider to see how shredded plastic waste from Dhading becomes high-grade construction material."
  },
  footer: {
    aboutText: "Transforming plastic waste into sustainable solutions. We are dedicated to creating a circular economy that empowers rural communities across Nepal.",
    location: "Pulchowk, Lalitpur, Bagmati Province, Nepal",
    email1: "contact@paramendonepal.com",
    email2: "paramendonepal@gmail.com"
  }
};

router.get('/content', (req, res) => {
  res.json(siteContent);
});

router.put('/content', (req, res) => {
  // Simple deep merge
  for (const key in req.body) {
    if (typeof req.body[key] === 'object' && !Array.isArray(req.body[key])) {
      siteContent[key] = { ...siteContent[key], ...req.body[key] };
    } else {
      siteContent[key] = req.body[key];
    }
  }
  res.json(siteContent);
});

export default router;
