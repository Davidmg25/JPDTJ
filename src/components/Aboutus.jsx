import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Cardt from '../img/cardetalling.avif';
import josedt from '../img/jpdetalling.avif';
const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white' }}>
 


      <Box sx={{ py: 12, textAlign: 'center', backgroundColor: '#111' }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#ffb300', textTransform: 'uppercase' }}>
            Detailing Beyond Expectations
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', color: '#ccc', mb: 4 }}>
            Unleashing the true beauty of every vehicle. At J&P Detailing, we blend passion, precision, and an obsession with perfection to transform your car into an automotive masterpiece.
          </Typography>
          <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={josedt}
                alt="JP Detailing jose"
                sx={{ width: '80%', borderRadius: 2, boxShadow: 3 }}
              />
            </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#ffb300', fontWeight: 'bold', fontSize: '2rem' }}>
            Our Story
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                At J&P Detailing, every vehicle that comes through our doors is treated like our own. Founded by a group of passionate automotive enthusiasts, we set out to redefine auto detailing. We believe that each vehicle has its own unique story, and it deserves to be pampered with care, respect, and the finest products available.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                From humble beginnings in Broward County, we have worked tirelessly to perfect the art of auto detailing, combining the latest industry techniques with eco-conscious, premium-grade products. Our goal is simple: to deliver unparalleled service and quality, with a focus on attention to detail that will leave you speechless.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                With years of experience, our team of certified professionals knows exactly how to enhance your car’s beauty, protect its finish, and maintain its value. Whether you drive a luxury car, a classic, or a daily driver, we treat every car with the same passion and meticulous care.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={Cardt}
                alt="JP Detailing Car"
                sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 12, backgroundColor: '#1a1a1a' }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#ffb300', fontWeight: 'bold', fontSize: '2rem' }}>
            Our Services – Tailored to Your Vehicle’s Needs
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 4, color: '#ccc' }}>
            From quick touch-ups to full transformations, each service is carefully designed to meet the highest standards of automotive detailing. Discover the perfect treatment for your vehicle:
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[{
              title: 'Basic Wash',
              desc: 'A quick but thorough hand wash, tire dressing, and interior vacuum. Perfect for regular upkeep.'
            }, {
              title: 'Mini Detail',
              desc: 'Refresh your car’s interior and exterior with a deep clean and a polished finish.'
            }, {
              title: 'Full Detail',
              desc: 'Complete service including wax, shampoo, and paint treatment to restore your car’s original shine.'
            }, {
              title: 'Luxury Detail',
              desc: 'Exclusive service featuring polishing, steam cleaning, and protective coatings for high-end vehicles.'
            }, {
              title: 'Ceramic Coating',
              desc: 'Provide your car with unmatched protection and a glossy finish that lasts for months.'
            }, {
              title: 'Paint Correction',
              desc: 'Restore your car’s paint by removing swirl marks, scratches, and other imperfections for a flawless finish.'
            }].map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ p: 3, backgroundColor: '#262626', borderRadius: 2, textAlign: 'center', boxShadow: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>{service.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>{service.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 12, backgroundColor: '#111' }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#ffb300', fontWeight: 'bold', fontSize: '2rem' }}>
            Why Choose JP Detailing?
          </Typography>
          <Grid container spacing={4}>
            {[
              "Certified professionals with a passion for perfection",
              "Eco-friendly, high-quality products and tools",
              "100% satisfaction guarantee on every service",
              "Tailored detailing to meet your car’s specific needs",
              "Advanced technology and state-of-the-art equipment",
              "A premium customer experience that goes above and beyond"
            ].map((reason, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ color: '#ccc' }}>{reason}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 12 }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#ffb300', fontWeight: 'bold', fontSize: '2rem' }}>
            Get in Touch
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ textAlign: 'center' }}>
            <Grid item xs={12} md={4}>
              <PhoneIcon sx={{ color: '#ffb300', fontSize: '2rem' }} />
              <Typography variant="body1">(123) 456-7890</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <EmailIcon sx={{ color: '#ffb300', fontSize: '2rem' }} />
              <Typography variant="body1">
                <Link href="mailto:jpdetailing33@gmail.com" underline="hover" color="#ffb300">
                  jpdetailing33@gmail.com
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <LocationOnIcon sx={{ color: '#ffb300', fontSize: '2rem' }} />
              <Typography variant="body1">Broward County, BC</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#1e1e1e', py: 3 }}>
        <Container>
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#999' }}>
            &copy; 2025 J&P Detailing. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
