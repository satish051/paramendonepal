const fs = require('fs');

['AboutPage.tsx', 'WorkPage.tsx', 'ContactPage.tsx'].forEach(p => {
  let path = 'src/pages/' + p;
  let c = fs.readFileSync(path, 'utf-8');
  c = c.replace('className="min-h-screen"', 'className="pt-20 min-h-screen"');
  fs.writeFileSync(path, c);
});

['About.tsx', 'Activities.tsx', 'Contact.tsx'].forEach(p => {
  let path = 'src/components/' + p;
  let c = fs.readFileSync(path, 'utf-8');
  c = c.replace(/className="py-24 /g, 'className="py-12 md:py-16 ');
  fs.writeFileSync(path, c);
});

let blog = fs.readFileSync('src/pages/BlogPage.tsx', 'utf-8');
blog = blog.replace('className="pb-20 min-h-screen bg-slate-50"', 'className="pt-20 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950"');
blog = blog.replace('className="relative pt-32 pb-24 lg:pt-40 lg:pb-32', 'className="relative pt-12 pb-16 md:pt-20 md:pb-24');
fs.writeFileSync('src/pages/BlogPage.tsx', blog);
