import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Services from '../components/Services'; // Adjust this import path if needed

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  useEffect(() => {
    // Handle scrolling to specific service section based on URL parameter
    if (serviceParam) {
      setTimeout(() => {
        const serviceMap = {
          'llm': 0,
          'digital': 1,
          'social': 2,
          'business': 3,
          'web': 4,
          'app': 5
        };

        const index = serviceMap[serviceParam];
        
        if (index !== undefined) {
          // Find the service card based on index
          const serviceCards = document.querySelectorAll('.grid > div');
          if (serviceCards && serviceCards[index]) {
            serviceCards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Optional: highlight the service card
            serviceCards[index].classList.add('highlight-service');
            setTimeout(() => {
              serviceCards[index].classList.remove('highlight-service');
            }, 2000);
          }
        }
      }, 300); // Small delay to ensure DOM is ready
    }
  }, [serviceParam]);

  return <Services />;
};

export default ServicesPage;