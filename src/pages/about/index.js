import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import officeImg from "../../app/_static/officeImg.png";
import signatureImg from "../../app/_static/signature.png";
import DividerText from '../../app/components/dividerText';
import { SidebarContext } from '../../app/context/languageContext';

const BackgroundBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(20)
}));

const ContentBox = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  padding: theme.spacing(5),
  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  color: '#FFFFFF',
}));

const AboutUs = () => {
  const { language } = React.useContext(SidebarContext)

  return (
    <BackgroundBox>
      <DividerText>
        {language === "bh" ? "O nama" : "About us"}
      </DividerText>
      <ContentBox maxWidth="lg" sx={{pb: 0}}>
        {/* Left Side - Text */}
        <TextBox>
          {language === "bh" ? (
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Krenuli smo u priču pokretanja Kahvane sa vrlo jednostavnim ali jasnim ciljem - “kreirati ostavštinu za generacije koje dolaze, mijenjati tržište… i pritom nešto zaraditi.” Fokusirani smo na mobilne aplikacije koje će vam zasigurno olakšati život, cloud rješenja koja čuvaju sigurnim sve vrste podataka te web platforme koje će pomoći brendovima i biznisima. Mi smo tu da pomognemo. Bez velikih fraza - naš posao govori umjesto nas. 'Mi to radimo bolje' nije samo naš moto; to je naša svakodnevica.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Mi nismo ni čarobnjaci ni superheroji; Mi smo grupa entuzijasta vjernih ideji da tehnologija može učiniti svijet boljim mjestom. Naš tim je posvećen svakom pojedinačnom projektu kao da je posljednji i najvažniji ikad.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Počeli smo kao trojica hrabrih entuzijasta. Mjesecima smo raspravljali i smišljali kako bi naša kompanija trebala izgledati i djelovati. Na kraju smo se odlučili hrabro upustiti u poduzetničku avanturu, koračajući odlučno na izuzetno konkurentno tržište. I tako smo krenuli, svjesni izazova koji nas očekuju, ali odlučni u svojoj namjeri da ostvarimo svoje snove.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Na kraju, kako ne bismo dobili “bućkuriš svega”, određena su tri fokusa za IT usluge, a kojih se i danas držimo. Bilo ih je jednostavno odrediti - “u čemu smo najbolji, to ćemo ljudima i nuditi”. I tako i bi.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                "Marketing kampanje, web stranice i promocije su tu zahvaljujući mojoj želji da se bavimo i mojom strašću: marketingom. Nisam mogao odoljeti tome da ubacimo marketing kao začin u cijelu priču sa digitalnim proizvodima i softverskim rješenjima" rece jedan od osnivaca, a cijela ekipa izuzetno ozbiljno to shvati, pa danas imamo tim od 10 inžinjera, 2 dizajnera i 2 marketing menadžera.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Kreativnost i znatiželja nas pokreću, daju nam snagu da svakom novom projektu pristupamo s istom dozom entuzijazma, predanosti i inovativnosti. Da, put je još uvijek dug, ali sada, više nego ikad, znamo da nismo sami nego da smo prerasli u porodicu od preko 15 članova. Zajedno idemo naprijed, pišući nove stranice uspona i padova. Jedno je sigurno – nama nikad nije dosadno!
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                We embarked on the journey of launching Kahvana with a very simple yet clear goal – "to create a legacy for future generations, change the market… and make a profit in the process." We are focused on mobile apps that will undoubtedly make your life easier, cloud solutions that keep all types of data secure, and web platforms that will help brands and businesses. We are here to help. No grand phrases – our work speaks for itself. "We do it better" is not just our motto; it’s our everyday reality.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                We are neither wizards nor superheroes; we are a group of enthusiasts who firmly believe that technology can make the world a better place. Our team is dedicated to every single project as if it were the last and most important one ever.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                We started as three brave enthusiasts. For months, we discussed and brainstormed how our company should look and operate. Eventually, we decided to boldly embark on an entrepreneurial adventure, stepping decisively into an extremely competitive market. And so, we began, aware of the challenges ahead, but determined to make our dreams a reality.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                In the end, to avoid a “mishmash of everything,” we defined three key focuses for our IT services, which we still follow today. It was simple to determine – “whatever we’re best at, that’s what we’ll offer to people.” And so it was.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                "Marketing campaigns, websites, and promotions are here thanks to my desire to get involved and my passion: marketing. I couldn't resist adding marketing as a spice to the whole story of digital products and software solutions," said one of the founders, and the entire team took this very seriously, so today we have a team of 10 engineers, 2 designers, and 2 marketing managers.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Creativity and curiosity drive us, giving us the strength to approach each new project with the same enthusiasm, dedication, and innovation. Yes, the journey is still long, but now, more than ever, we know that we are not alone; we’ve grown into a family of over 15 members. Together, we move forward, writing new chapters of successes and challenges. One thing is for sure – we’re never bored!
              </Typography>
            </>
          )}
        </TextBox>
      </ContentBox>
      <ContentBox sx={{ mb: 8, mx: 2, padding: 2, display: "flex", justifyContent: "center" }}>
        <Box sx={{ borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center", width: "50%" }}>
          <Image
            src={signatureImg}
            alt="Signature"
            style={{ width: '90%', height: 'auto', display: 'block' }}>
          </Image>
        </Box>
      </ContentBox>
    </BackgroundBox>
  );
};

export default AboutUs;
