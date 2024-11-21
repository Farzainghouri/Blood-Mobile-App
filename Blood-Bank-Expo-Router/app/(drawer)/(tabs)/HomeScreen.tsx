import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';

const HomeScreen = () => {
  // Animation states
  const [scale] = useState(new Animated.Value(0));

  // Trigger animation when component mounts
  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNPSkNQRGYu1-7Tu_kY4fg9OeulAiPUIR4w&s', // Replace with your logo image URL
          }}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Connecting Lifesavers, One Donation at a Time</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Donate Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>Find a Donor</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Animated Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Blood Band?</Text>
        <Text style={styles.sectionDescription}>
          Your Trusted Partner in Blood Donation and Saving Lives.
        </Text>

        {/* Animated list of features */}
        <Animated.View style={{ opacity: scale }}>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureTitle}>Instant Donor Matching</Text>
              <Text style={styles.featureDescription}>
                Connect with blood donors or recipients in real time.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureTitle}>Safety & Compliance</Text>
              <Text style={styles.featureDescription}>
                All donations meet health and safety regulations.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureTitle}>Community Support</Text>
              <Text style={styles.featureDescription}>
                Access a network of fellow donors and recipients for emotional and logistical support.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureTitle}>Track Your Impact</Text>
              <Text style={styles.featureDescription}>
                Monitor your donation history and see how many lives you've touched.
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>

      {/* Image Sections (4 total including the original one) */}
      <View style={styles.imageSection}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PsrVT_i24SXhxM4f6bAGlYM3Wn02cRjejw&s', // Replace with an appropriate hero image
          }}
          style={styles.heroImage}
        />
        <Text style={styles.imageSectionText}>Become a Lifesaver Today</Text>
        <Text style={styles.imageSectionDescription}>Your donation can help save lives and make a real difference in the world. Join the movement today and give the gift of life.</Text>
      </View>

      {/* Additional Image Section 1 */}
      <View style={styles.imageSection}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6x2TBElpVkOnQ_7yrEYFmGX6Io0cwd3P6gw&s', // Replace with another image URL
          }}
          style={styles.heroImage}
        />
        <Text style={styles.imageSectionText}>Help Save a Life</Text>
        <Text style={styles.imageSectionDescription}>Every donation you make brings hope to someone in need. Blood donations save lives, and you can be a part of it!</Text>
      </View>

      {/* Additional Image Section 2 */}
      <View style={styles.imageSection}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEJnaLNPp0CzVy7SO5wml1ls0lQaPqThDGQ&s', // Replace with another image URL
          }}
          style={styles.heroImage}
        />
        <Text style={styles.imageSectionText}>Join Our Community</Text>
        <Text style={styles.imageSectionDescription}>Together, we can build a strong network of donors and recipients. Join us and make an impact in your community.</Text>
      </View>

      {/* Additional Image Section 3 */}
      <View style={styles.imageSection}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGB0bFxgYGR8dHRseHhgbHRcaHR0aHyggHRslHRgdITEhJSkrLi8uGh8zODMtNygtLisBCgoKDg0OGxAQGzgmHyUtMC0tLS8tLS0wLS0tLS0tLy8yLS0tLS0tLS0tLy0tLS0tLS8tLS0tLS0tLS0tLS0tLf/AABEIAJUBUwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYHAQj/xAA+EAACAQMDAgQFAQYEBQQDAAABAhEAAyEEEjEFQQYiUWETMnGBkUIUI6GxwdEHUuHwFWKCsvEzQ5KiFnJz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EADARAAICAQMCBAQGAgMAAAAAAAABAhEDEiExBEETIlFhMnGB8JGhsdHh8RTBBRVC/9oADAMBAAIRAxEAPwDi9tvWnBhTFphqigtL3A7UcLKlSR2qqtVfdFcZUjJ4pc9gJIH6brPhXFczitxpr6MvxbhJnKr7x6VievO1y4AFAIwIq0tO9hUD89hWbqI6o+5HsRdc1K3WG1drKc+tAa2yXgRVrrOm3SDeKEbs1TtfdRVYVUUo9hW9lXetkGKYKOew7dvrQRwYrZF2PTtDlYivPiZoiw3tNTNrEnKURCuuHNNom6F5FQNVlo9VhUqgEe9RqAK8b2qiDtxqQWjyeKh3zUqXCcVCHhOac4qRLG4Eg1GJAqFEYFT2FzUaLRASM1TLZZ9K0YZ4YwKu72lKjbb8xNVvStO91fIjNHJAJj3raeGOlbPM2WyDI4+1ZM03FgJWV9y0yaYliQ3tnNQdF6wtvLhiR2P881e9d6lat7t4Bxx64rG6/rWne0Qqw/0/rS8bnJboJUE+IOrjUuGCgRjmar7iYFLR9Iui18Yodp71NdEhYocm0h8UWfQlC3PMMRVV1nWs9z4eNoOKsWBCyOYqkTSOG3MOTQ4Emm2Vl7DFkHFBahXZyJyKtNRbiouk6N3ZiSAfVq04X3AyRPLtoiyQwzUFuzIH0q0vdMu7GcsCoBqOzb8o+lVlnXAWK0i78J9Fs30cXeREfjkVZazo9v4fw2aY49fasq/xQJttt9feh7S3jJLkn3NVj3jbYOT4uAbqPRbiXI/Se9apNZptPZUKBvgdpPvUHS9Hcu4uuNoGO0n60Bd6ITdIDSoNMck1uxdSBtYznfcKMAwME+/FB6S6+2dzfmtx17qds6R7QA3bYwPSsZoLfk/NKlK42PhBpE1u4e+fqKZ1DVbNvlXP1qZLdBdXT5foaXjdzoZqaR6muWP/AE//ALf6UqVpRA/tSp9oDxJFA1eCvTmvdh9K1ihyUdpr0UNpbO45qx0elCkO/wAoNDKgJM0qaNdKlu7di4LoERyCRIPuKktdKuOReuL+75HsO1V+t1tgqgUExwOw944/FW69Sa5pjbV4McViztJP37lSpln1DXlkCKy7QM1gepaSGlWBE0zT9Qe3uHM4z2oWxcJET34osGB41yC7e4Z+w6lIOww48px/v81Xr0y6wdtvynM8+pqw1HX9QAq7sJxgfafWgh1i6CSD8xyOxp/nry0GgbTXCpyI+opa0CZFS63Wm6QSAIHahnSmputy63sbTTUpQ9qaLTHtVljBXsUTa0TntRK9NeOKpyRTkkAIvrXqLnFXdjoTOtWen8LlR5poJZYruUpoyu+Klu7SoI5rY6fwep5JzV703wBYPMk+5pf+TAq74Mf4S8J3NX+83BLSmGYzP27H81vdH4R6dpkW7dJuspBG9oG7sCFO0j6ihfFzporCaXTkK7sDtHJJJAPPvWp6d0a2bKWrjBjtG+O7dzP17UalqNmOEasdo/EeiMqjKsgsduOckmIzn80Y+ts3QVVlZTKttGcDiR3Eis317oGnt2yltVG4gnGefX+81itUlyyqtbLSJJ+pJk/XjtUbXDG6NrotPE3gm5cYtYvb1mGDdj6E+tZjqfgvUWoI8wPMV0fwR139pSHbziSwIAABJgSAJMCc+p+2kuJZHzEVny5JYmkuDJOKjwYzpHV7tjSraZAwiBOP/NN0vWrDAW71oBSfMw7fwmrLxPp/jJ8KwBv9fvWLu9JvWrosuQWbis/iat2y1NnQOoeDbV21v0Tg44mQfv61il8Nakb/AIu5dnCnv9/So7erv6O4Qlwowzg4P1HFXA8d3rihLyKy/qIwxHtmjUo8oJytGW1Furmz4ULoH+IwJE+1XAtdJ1ACh307R+rj+MitmvTA1pVtstwqBlYqqlFWi3fY5dqfDmotqx3bk2mfxQVq0Ai/Suqa7RMtl/iAgBTzXKdfcAZgPU0tSc1TJB+pJb6Xc1AItD5TJpf/AIpqxiMfWtD/AIa3pe79F/ma2t6+ZgAVHn8PygT5OX2vCurGJj7mik8IamcvHvmumWFUwWMGotTfkmDxUlnpWwd/U5b1nw3esozs0qBkfw/nVX0615P9/wC+1dI8XmdHen/KP+4Vg+nIPhj7/wA6ZHJqhfuaMW8SNbdR63prsguAeVcE/WrA2hFaXwtoEvWGRxIL5H0CxS1KpJkycAOg6f04W13FC0ZLOQZ7yJpVdXPBNiTC0qPx0K8T2OLXLXPaiunncNpE+9N1V4ECFg0ywxUYBmum+BD3QdtWcDHenoGY7f0g0ul6gmU289/Sr+/d+EotqoO4fNWSeTTLSAAdVsW2ZBaXbA8xjk/1onw7082wdS/yCQR/WrnQ9ESVLuCKi11jcWtC4FtsYpOTLqWnt3Lsx/WLqG87Wx5WP/mordsT5a2Nnw9owIdzPrMUZoOm6RBtZd0GQTmmf5EFsiHONYpmm29Gx4BroOq0On3FwnBq1sC2F3i2Ao7xVPrK4RNXY5xp+hXmiLbfWKuR4NvQpiSe3p962trW7sKAB9KIOvbiM0mXXSJd9zI2fBt0chce/wDpTrPhpw2QBWpOpfIM16WYxM0mXVsqkUFvwuI+Yg0fpfD6gCWmrm3a7mYp9q0sGftS5dTJ9yaUR2NLZUCAJFFBkYRFejSbsAUdY6Y4MBZI5jNKeScuA6BraoDxVhplkblHFTL012PlAX2NSWtMwxxmKtKa5WwVGE8X9Je7qrF0/Kp9PliT/MCr7pFxV8uQff8A0MVYde6cH2W3IAh5yQcgf5SD/GqLoHQLabmW+z84n37Dvn27966GNy0p+h0OnXl+YP4gJcmGGO05rF9Rd4IPetZ/w/VqzH4oa3JwUkEfUZH3qo6xp9wG0DcTGP8AWrcpRas08xZR+ANYVvlQTLGAAJ7wcEj/AGK6Ta0Burd2nKkkTjuTj2rB+C/Dr/tylioCndIM+8ce4zxkV1Lq3TXYBrb7TBH1oOsyKTVb9zk5U1s+xS9LTcJyrj+NQ6a+j3j8UQ68E+ntUlzX7WW3cOxlESPSvbgtlxvGIw/rWJNSdeolMyPjnSOb++2pIKxgeho+z4V3WEdWIcjINak/DCllMgCQsfwoXReKLBEYGYintzjFR9BlnOLojcJEgwfqDT+n6m4h3W3ZCG5UkfyoXqOdReK8FyR961vh3w1bu2VZnNtiee3tg0+UlFL3CR51XxHqmtAXLzOpGVOJ+4FT+HekaHWKFN42754UwPxOGp3ibw5dtWpjeqgSy8ff0rG3LeadCSez3HQ3Oi9A8I3tLfuyQ1tgIcexPK9j+RV2REya550bxfqtOYLfFQfoc5/6W5H8RW46X4o0mrhCfhXDwrQpJ9A3yt/Os+fpdb1R5Kli7oI+JuNJLeYmKsF6ZBOR7UzU2fKr4nuPSsDwSSuaEuLXJnfFqH9kuz6D/vWsR00fu/vXQPGdw/sbrjO3/uFYHpvltwe9benilideppxfB9STbHf1rW+D3QWmkwd5/wC1ayNw5rYeEbSGy0nhzI+y0OZPSVk+EuBqvevKgbTicMKVYNTM25xe3pzRItnmM1rF6dpfiEq8rzBBmPxzTtXetydhG1RA8p4PrjmuxLqfYzuMjL2LVyGKKcCWgcD1oj9kcBSDMjj0rS6HXKLZtqFg8kKd0fipbK2iw2uM8SDH5ignlb4RNLZQadLsQAT7VprPgpn+Hce4pRo3BT5ln60n1iIFhwCf+Un+lSHqKgn96YPoCP6UlZpRe8QlCuSCz4M2sxa5FvcVk/NH96N0nQbJJAukbT5Z7ic1EdXYuJt3tgyT5v5RzSnTFZLEkD/mg/aKvVKW9bfUvT6Itdb0nTAkW2x3kzNQtbUeTdNqZwPzFAWdZYUEBiu/5sHt9qlt6yxwbnHaD/akT1S3SLos+oqsLsI2j5ZGfvQWwggyPemWup2D+rg4MH+1eavqlliSHAJGYU/2pU8Tm7aI0GDkmOfxUnxwsDbmgm6jpwqxcIzBO05/hStdSsPJN0JA/wArGf4VawTXCLLF2UA5zXlm4o/Tz6VWr1K00EN2xIP9qmu9Rsgbt59DhvxxS/Bk96osubOoC9pq1t63O5BsxEDufesevV7Azu3Dv5SD/KjLfVrO4QTB9j/anY9cOF9/gSzTabXuCSSCxqS3qrlzgABTiqK11OxMbvvB/tTj4m0dsN8S8Q0SBtMd+THsa0QWTh2MhCU3SJPECu224TgEhvaYj+UfcVmhqL6rsvaQXNqrDoFPlgQTuYEd+AYipdT49t/BubgrjdAFtWIIPZt/oCASO9AWfH2mVNt0OCoEGNwggETE+sZiYmtUMEoR1Pe/nZsxScbxy7d+xY9O6qzWyxtNaUxCtE8c/QxVO3TbmoZvhruAiYzkzjkfnsKyviXxu99j8MFV7TyfxR/g3xSbFmANx3lmmZztBg8EyRjsBS54ciWpfgNeXV5Yc8nTehdG+BbBYD4n6m5PAAk/QZPerzVLu2wRxkDGfWs90LxdZ1Csu82wCNyspJM/qBAOOffFF3Oo6NTI1AOYwjHHrxSXjyJN1s/kc/IpKT1chd3RIyunlV3EG4y7oHsPWsDr0YqdOWHkbaGyCfcCtJe65bk7bpj1Ktx9Iqm8Ray3cUMrSRmNp/jikRbT+H6iZbooNTbuaV9m8lT3HGeautB4T0922L3nNtc3Np832mq/Q9Zsvb2OTunBI4+kU3pviNbBNs5Vjzn+1aU5Xx/ICSIOlafTPqCiIYk7d8THvW30yWgNpEADEdzWUv39MyuyvaUkfMytMx2MYp3RfEdpNqtdBZT80Ej2jGaDKm0p180GtjX3b+20+SVZGkfauM6DVkqPic8bv7109uq2bnzXQpIbBB9PYd65Ct9QInvTOli6e3oNjJot7ykH6jBpp+lE+Gls3HNu6xC7SREyDjPFO6no/hElW3p/mCkR9R2rSp76XyaI5U9mWPRfFWq08Kr77f8AkuZAE/pPK4+3tXQul+ItLqRtZvhPjyuQM9trDB+/4rjo1SyM1M2tXIn07UUo6lTVobUWdY8cadV0zJl3aNoUHdAImcRHvXNtPIBX0P8AQU09XEyTuAxBnAjt6V6OoWDhWIPowx+Zz/pVLHFR0xQCjpVJkgb8jmtp4PtKdMTPm+I0D7LWRs6PerOjBvaIJ+k81f8Ah3X2rVmWd1uBydu04EAScVk6iD0boXk4NYmlSMmKVVtrxPpYG5Sx7mWz/ClWVdOq4/X9hGxhP2YBiOI9aaljPrnOaOAmcAniPX0/lTMD5QVPBn1j+VbFYFHll2tyFmCfMP5Qeam0l8JOGIP8DTTbwWgZOM5mnfFhfqefX7dqY5NFoiuackk7Se5NRvyJ79xUpuxkTH1p1xxG2Fnknv7Zpba7EGrVl4b6UNZfWyLhtlpztkCFJ4kekVWgDGYP4rQ/4bsF19okhVAfLEDlGooeaSTITdY8Gi1p71+1q0viyxW4Nu0qQQGE7jkSMYqHxR4UXTXLKWTcuG6kwQCd04ChQMVsvGWpQ6LU279yyWZybCWWO5oIKbwD5jOTiPvFTazqti31DSPcuIF/Z2UMSIViViT2kAifenzwx3Xy/UlHMOo9Hv6aDetNbDd2GD7SMT7c1Pc6JqRa+P8As9z4cTu2n5f80cxHeIrZ+I7vwOnva1N5b919SroA287BdVzzwNit7eaK0B6gg1La06u3+xnTbQvxP1bp+TiYx65iKpYV6/wQ5Z0nw/f1DWyLTmybiq9xRO1SwDH0kAz3jvU/inpq6TVXLKtKKqkMwE5UE/KB6+lbbpOpVtBpf2fUW7AtXg14M+3yb2LLjmdwMcGsd/iZeD9Qubcjap3KQRhBNVOKhC1zsQuU8BoVsk61Ee8oa2jJEkgGAd+eazd7ompTVNpvhl7o5CeYEdmH/LB5Me9dE1egt306fdN+yiWERnLOJ4tkAdv0xJNQaDxHZvazWqlwW3uWlSxcbyglVYYJ77mBA5IHtRyxR2rYhgn6HfW6tp7Lq5+VSILT/l7Gi26FqVtsz2Lm1ZG4iAIMGe8D14rb3deiN06xevW31CPNxlYEKNrcseJkc5O2pLXU99zqivdlAgFtS2I+G87RPf2qeFG+fuiGB0nR9TcttctWLjqAYIU5I9PX7VndX0nUXVu3Ldq4+39021SYdoQCBmZY8DvXXdBf+Lb6fcsalLdnTT+1KzlTAtbYI7+bPm9Zqv6f4itNZ6te0txQfiE22BEk/DA3KD6tJH1pixxjHn3NOCTitjn3R/CWsF1gNI7bF86GCJkkA52htu0gVXa3prNfNt7Zt3d8bI2lSxEAwRjI+0Vvv8K+q6m/ZuDUPZu2XufvC97ZfU7EO8bR5lMCJKkFTnsMl1yzZPULiWtXvt/FULcun4kTBY/EJkhWJEzPlGe9bsMU1VGXqMkoy5oset/4ZaPTgi7rraXxb3/CNsQ3OFJIkkiB/KqPReB9XcTfatXWtsQdwQAECYI82QCB8oPH46r1Fz+xXx1R9JeCof2e5aM3GO0x5SMPMRt9c8Emfw3b02nXROl1SjIQz3NU4h2EhFsT8MksWnAIj1oHCLQSzTT5OVdI0F7SWnvXrbNakL8QAkHaWEH0MiJ+9Xz6HUOyI2nuK7ZRYyywDugds5mIM1d+GdVav3eoaC+VW2+puXrZJwduoBMHjPkIHoGq66b4k07dUvb7iqSnwbO4wPK0lQ3beTI+grPkxr4bH28keNzC9X0T2fJetPbZvlJwD6x2P2q28MeEzrLFy4l7ZDFdu2dxCgjO73jij/HeoYae1ZdLabbhZdt9rzQFaZ3KDtO7kntS8HdZSxoLr7o2atJGAYLWQ0A9tpOfrWZKPiUzOV3hDwN+0fEuuRbKnasrukkS2JAxj8msRqdBq4W5dsE2WO23cwFYyeM84OPau5aXWWbOpt6dHXawvXnO4RLOu0TPoxH0Wst4Et29XafSXjIsahNTb9gLm4r9NwM//wBKZoiqh8/x5KaOW9U6S+iYC9buBypJRyApBOIAkng/irzxt0RNAunZVS78e3ugrt+Ht2mVyT+vP0rzxv1ganUXr6ncqt+7ZHEkDCRyeIPHc1t/G/hX/iK6IpqLKLaslX3v5vMqRAA58veKOMeSV6GGudMJ0WivWbd9tRqbvw9rJ+6g74KkCTAWe+AxIEVJ42/w+0+huadEGr1Fy6+0qEG1pUmLe0TuBAxJgTmtW1sW+l9MRLoVrWpBktsYDddB+kho+h96s9R1a0vXt93UD4Q04W2C820duW52qSBtn3okoxLOVv4X1Gjub7lm5bRwQm/87SRjdHapU1RyuI7V0zxzrWXSPaZLIVroKEalrrnO4sFZJAIEc43Vz+ym4ZgHtP8ALFZMsfNsyyk1fRg/mQBT6dj/AGqlv2WUkMCDFbtdNMBSPc+lQ67pitKsQw9RmPp6VMcppb7oZGbXJipqNuRVn1LpjWjzKkwrcT7Z74qrvVpTsfdoten9duWvL8yf5T2+h5H8q02j6naviFOe6Ng/b1+1YOfN9qRB59O9XtwymjoP7EvuPsKVZG14g1KgDfMdyAT+aVL8HH6AaEaYW2BkK0n25H8qS6S6ebb8CDtOckZx7VtLbKD+n3G76SKdqOq74UWkQeqAiQR3BwTz9/zXJXUWqMxirOicYKGe+DH+5rwaO5MC208ER9a1twwJg5IhTj+IxECmXtWsM3ZfMREeXvzzz/KlS6qXoSzLjQ3J2m2y+o2n/fNRHTOoO1GnjjnP0rVqWaSZkgkAgkbcEc/wplx+zTIU7u0Dzc9sAfwNRdTNPZFWZc9NuzIRsDOD3pyad8TbaR7GPb81qGuqx3KZ34BkQw7j/fH2piAIoKusnB9zHp37celRZ5LsSzM/s1w52MD7D+w4pl3T3cHa0diFx75jn+NaRndSZO47P05GeVGMEVPnbtJzmFAieP7nJE8Uf+RJJ7blWZfTWrhUJsMk+h/l2JqUdMcgbbbs/BXYSQfrGT7Ctddtqi791s7sFFJZhmMyAIkds5FB3tXDB7attUNtKGBHfdmTIM8etWuoeyaLujLJo7m6DafGIII75+mafe6LdKhxZvBCcvtO30gNHc4+8VvtHbttae9cLb1fKMpKmQDG5ckmfrNQ2CLrTaLIBDFd52jPK7oKwTOTycZpqySS3X07/f1IZC109xPkK8wNrSfXt6GM143TrjYFq53gBDkx7VsrOnvahoDscf8AuXAY4AjdJySOO/anur25tws9yrSd3JWDgMARip482tSj5fUsxiaO6AALJnv5CfSe1SfsTzJtRwcA/wBvWMVs9MTLvtj6gtDfpMc8dojjnmnaYEE3fLvOdjjy8kYgYEZwO3ajWSSRLOe6/qptzaa1cY3F8rLGfNBAk87iPyKo7Fxrx3W9PcYruYxbJIMeUGO/H4rrOt01m9ZIv2SYMowEbSSCGVhhe+DIIMEZisrpyNBc+GhJt9iefoT3PvWrHljJJP0N3T56WlcnPdLomZsnaEHn3KQVHC4I5MH8Gj/+I2EEIhc/5iMV0LXaHTarzDbv9GwGiYBIzifeg7Hh+2fnW3bJJCgNuBj3AH++a7WGeNY1cqOZ1WHK8rcY2YB+p32wsD6Kf7UFeu6kGSJ/6f710bVdIFld2xdrfKSwMxEgbZz2ql1ekB3GZMmYxEcieAeKf4SkrTv5GCWScHUo/iZ3pdi6xV9pYEwAF54kDtIwfaKvG6Rq94T4Tszq22AdzkNuzOBifWKvPA+gR76jJVk3NPO0NhccHdIPYgSK6L4r1QAshRtNtpWMQIIIx+niR6CuPnSjqk+x6DDlccKo5ppuj6m0mx7DzJLeUzJaSuRnml+zNmUaThvLwe0V0JupI7Q/lMeZwDCk+wk5IPPpQm+1bYtIZipYEqCM4G5G5g8f0muTPL5rVNP8vv8AgySlbswD9OdApZHyTjaT+fb39q1Gg6vqrGn/AGX9nVNwYPc2neQSxILL3ElfYelWPTtArKxOptgCBDeWTBJEEDseRile1Kqy/vFcbRmRtkyCu0nHrtqo5pQWvj62UmYvSdONi6/w7Jdp8u4RAGTBMR/YVU6zU3Tc2ai09oMCYdGBI/6gJ45I7VuS5usoZnFzG2HII/zeb07eke1ZXxNoX/aA1y5uQld7LJIUmTtmZHMSORPBFOxdXqekFyaWxQ6bSgt8QOQZ824ESP0wYz+afqdFcJ+IxcptBLBYn2xz9fatLrrSXbYsaazKpO6V84JMq5uL+k8bffjFVHRdWqsS0uqkSGE/LJjaY9IjsJ+73JtbA6jzol8KWQS0iFBWJ4jAnP3q6TQXyZ2NEYhTHtFAdc19txcdQu+2V/eWlIBBLBZ9W47en1qx6H4oa3bi+WDh42mQcmRgiRiaTOUmrS2QcZb0Os6K8d223dxloUnE4mkOmXS2Lbme0HPr9a13SdQvw2d2+YEbEY7o/SCWWIj/AHxLG6cV2My7lJjJPcAwJ4Mf0peuSStDEznvjrp1+3Yt/EtOgNwRuGCQpwPeKx1tyQA4J94z9/Wukf4iWyti2pZyvxJAYgx5COwrn6pituLJcLGLZWMa2ZkCe1Oe03ofxRNkSautT0a58FLyjcpBJA5UAkEn2xzV+MrpjYtPkzfw29DSqxmlR6hmhHSbTEy20KIKn8YP9frM1LZR0EBjwfuF9cnP9vehVViTjMc8ZMdvwe48p4qcqi2vNvW4Du+YbNskAxEmRJ5/189FI5o2wXnz/qJAIPYkQI7Yb+Fe29IqGA5MkkqJ5kEmT/Ie8jin6aySBIHOD9QI9u0fY1Lo3BEzkqfQ5BMA/k5HoOYq4xe/9kI9HsVWDpcd2mHLfLA5Cj3kx6QKmsKrsnxiNsAmW2BgFJ57fmmDUDcpyDMQMfQ5574HrURYiDxBkZ7E8AH6RnNS902REvUhb3D4awqiCoJgEEidxJ3eWPMD9pqFbdsthNhAyeQfXBwDj7AGg9brWG0AZ3AknAAnzROO8T70TpNQnwzcLSxygIMEH5jP0HaO9Me+/qVqTY6wBIHAk5j8cfWPf717ctWmeEaW2zz8s+jff7Z+lEqqxACndktJ3TnkboABIyMiKJs6w27Rsi2p3KZnmeAcZWM/gUEY+r+vISQJ0/WNbY7Crb8sCpwBMTnjMY59MVBZcth2+ZZnkeVSc4JgCfemWCUbeCRn5hOZ5XPpHpTdA264FWF3MASflAJ8ozwY7yaNO6Xb0BsLGrUyWHmO0Z+UmDBzBI9pkyPSKYNSCGC7SOCSI4gFhEn3xjmZrzX6abjqbobsGXEA5EHscAYr28qBVkb7jGDIwBAAE/X8j0qNPdJlj10JB3BtwIBGDA9JBE+hnPenaWyzzAZgvzEkYIjueYGftUTa7cCA/lgKVMyTAjCnaVHP4prakljuIlQCBt8rAKNhxyOT6mrUI33+RLJ9VJACkiDIKtE8YP1/kfenDUR5twYDIgbipn2PrE/WoTqAOWLQABuj0yOYEZMHsasum6beGC2mcSPkICxHJ7zuGJgYJ7UEcc8kuSIHsawM2xjM/IY4hvUfbH85xmfFedxBAlg3zD1O4GeDHb+2OgazpyOAkC2OD8MmfmMxIwexP3pi6XT2vKlq377iJPrPJJ+teh/4vpNMG5b2JyuXCZxtdcwaBJzyMfzrUX74NoAAwQO25W7gYzukf6Ub4r6FYZd23YxYKrWYWCQTLD5TMRx9xWNbpd2yfNfcWyclQQJGRxgH3MVtzdCpfBsNwdfLHtk3Ll9bb2oty1dfaMEMoAk7iAGPY4z6TXtvqumCkMjW/wD9thnHrJozTXdNaEm4Xb1a8ST/APb+lW9mz8ZbdxHturerkheQCQck4jJHuK3xUccUuxz5OeWTfdhv+Heks3Ga8jTbQbBB7zuI+0j80ur6sPrTBlbaHHuQQBj2k/UCtZa6KBpiiPDx8wxB9YHasj4FtgfGs6lFZxeYXHIO7AgbT/ljI+tcnqISzalDudaL8LEot78BaXlS2ArqQxVShWS3mkYKwRknnucTNVuv0ds7QAgPcqPMxEGXIBlsAmc49RjS67odtibenvbGx8xLrOYDSBB+hJ9qz2q0OosOHtOHXcQbiT9GUkRtPFcXJ02fGvNHb1W4lyvYBt2t7TvAIB8uSMiAGxnBjFWvSBphauW7wQszeVnXcFGOAuVMyfYxzVUl5AQgO3MCDB5BPOSI/JmorBcXWR7Oz4fmIkFn3t80rjbJHAxJ+lIg3FXFcf7ImTixbBJC+bt37YwZMj39Kk1miDr+8YFM8qFPIweSRORmccVcJ4b1F5RcCsh9PKpI9gw4PuO9AdQ6YyjZdDqQJGIAA5yOcenY84qtOSO8lRdGc0WiCvfZ7twXGI+GEbaCcmGSQWgCIC8TETVL+yuHF34S3QtwM6cBtwPzY4Mce/uYveoaBi6ul8pcUBk2qYhSCG4JmYA9AMzNFeJ+p2vh21cD45RJuB53RM7gO2375HpnVjy6o+6K02vkA9L6uLl/94q6O38PZcKKxXcTKSI2pcyFBPAEZ4qv1we5duTf3WrVw7S6LbdoBAYBF9Vg5HHE0Nd6h8MG3a85dmaGzAjDcTMQc+n3pv7cVu3N7bvLJUrGCPRBAzB+35e23Hbkp8Gg8NXtrFr6MoZQA2TEZ24zmZzWhuWzc2Kj7lP6QWMYkggY3QZ7Yj2rB6kX7Z+KIeAGaWUgCSEG0H0HH14qy8H9fLufisiHaTbVSVJY4Exy3MGeKyz6dvdcdw4PsG/4mdOt27CbHyGG5SDMlJ5Mn059/SuePbgQeQa2Xi/qts6YWI80ygJ3MF8wksRuO6e/pWRugs+1jtO1Sv3AEGT9K1w+HikaIbqj3SiCK6z4d2t0+0gKBxvmUBY+Z3EE8fMI9Zrl+l0ilUbfAPOM5ro3h+4vwbQADQEAM5DbBM8RyfyPWs2aTXBJxpEidJ6fcAd7W1mAJEsPyEG2e+KVOv8Aw1YgpeB7hVMfypUrxsnp+oHiS9Qd9RsMlpA49vc+3b75oXVO27BxMwZzEEEdgAMkdjUn/D9xBO4BTCyOwzzHrH1o9LS7gvIjuJ8pPaftWNquRNMCa+624nzHmBPI+3pj60zpxYAboWRuBx6iYE47iDHFWl22RvAUk+xx5T5SfYc5qLUfJJHmMncFjEH04j+n5ct42SgNkJk8qCe0EmOxbjt3j6UyzvLqGQbciIyCWYK0TgRtnjue1Hc2VyN4jGfuDMTMDI9a9RGMuqlts7QBklgDJ5nA+mO/eRinsvYlATajcArAxMczA7mPQfSmsRADDcPlM5+gGf41PbH6mXO4+3PYR/A85odNKWkZUkSB6cwVGSxHPH+i0m3pKJdTqdoZdnJJXI4xECcDBPf0ovR6dr1wh3FpSsKWEkmIAPaBEzPfiqnUbvl2qxZTO+SrTyTukyZnPqeMURbChVkQGJ8vAJ5kxiZIzRKEFLdX9+wSZD03Fs7iWIyRiYgbSByfr6ntT9XcBuMvlB2gyuJXdBkDvMg/Q80YFUFjPmPy7RAgDCjsY/oKbaKNdIKyEgHdtBI24EgwWAaRkjH2qbXQNE5v/Dl9PuHlEKB5snMMCPuff3oaxo5LEv8AEDZZAZAxgCe2I+9PFh3+QMAsiBkkCMjEmRmPavAr7lLeW3EkKo5KkFmJAgfL6z6elqd8ffqXVjU1G0BQgVQYJCiMAn2Ij24n2mi9PYL2g4ZYLEAAszASSRABUSTgyM0X07W2w1tblpbo4QEAdmJbmAPSBMvM4NBXvhozPK21khZxO5WkSR5hEDucfYMtd39C6PQ9tGBCIHI4WZLRye4kASRHAPpT9V1JLJFzc9qD5yrM07ZBGGJkyYExj2oO2bKq8IWcICQBtbaZhYiQuMTlscUPfskqrLwR+8Xbkgjg57bhnMebmosrT++SrC+j9TS8zoNy2xDYPmILNKsNxgkicdj2rRdP8RK0rbRVClgZ5JxBwAYmRk5qi8IeGbexr95GbdlUSR5R3dh+mWIA9vc1pbXUNIgg6VQpYkkZaScmTn+Nd3FnbxRXCReLGk3J9yo671cEG3qbYNtsbh+k8TB4j1Bx6VybVa4b2DXDdA8oCg5g4K5wTAMzPFfRI6fotXbMKrKcGJBH27Vyvr3+GY01wOlwtplKNI+ZQPm+J7GBDD14FOn1ThCwcuGMnaRkdNomuEkKRtyyEjOcDLZJ9Jk5rR9Kti4jx22sVkKEHJWAScxhQCTOeKb0noIDBnVlKOpJ7EgHbtMk7YYweQY4im9Q0t235vhu18k/FKiVYDgpgFHOwSciY4kg5P8AspTuP0Ax4oxkpPs7K/qXiQnNq+yjPDEcAEDGTVn4Y8WuQwueZ+7/AKnjETIhtoiecetBt4D+JcuQWVd5YCBBUwTtzMgE/gYNHaLww6FVLowX/wBNtsSo2bVdp5JLDg5GI4o8GeEPM3yP6qc8saiqNr0zqC3k2GyqKpDIoubXYgSdoJyYE8zHan9X/wAQAos27KS1w9jCgYAE4iSw5jAP1Od1FgEwWSdygQA2MDYWEgZWNx9RRljR2Sh3M3xJhQrblXBMiMMcqMnAGMg0hf8AIycamvv8wMa0uwnqXjQ2Lpt37SsVgyFlTOZG5QT9Y5q50fVLDRqBaRX2SrRkTHHYeUDj3rDnpq3VLMjOzCNxJ3Kk4EczgZmcD0mg365csK9ldOjmCtslyVUAHcQvO4k482OIqodVFy3Q6eSL4NXrev3LrHzEDsJj/ZqsudXdh8NmJXkZyCM4J4ng8DNYU+IbiMVuqVb/ACyCR7GDIPsYP5rX+H+o2XXZ8NWyf38sG3ABoA+WAuI+/NVmblB2yrT2DryGAUdnX/3IBAVpQpI2nJUmB7ROazhGp0qXNWVA3nYC2WKlgJ8wORtAI9D7RXQGt6hNILdqw52Alm+M0QQZAUNMZHl7RWWt6e5dtsCSJEPD4yZO4d8AfWsql4TV9/oDsjE6K7cLG4pYESQR5BMQNpHuTiOwqTq2nuoA8KQwEPMwNswWES32IEke1S6rS7WKkwZEY7iSPsfUc0dZBvKyFgSolZiT3IXHJM+9aXkS3SFIB0Fm1uVSzXkYSAF8xI4UA5wfeIoBFuITtBMMJJAB/wCWDO2BEd8/iiQfh3EJWQOAwg5XzAd87jkDtR+s1Nu9cV0XZ/nUmQvmA2yQBtgzJBMmJokt213L2M71PUm9AAMKu1TMtgZJ9zz7VFesuI3AAyBJMnAq8tW7CjcrKrAyIYE4GCAIaZ7UFo+opJR9u0yDJaDnE7eCPX2pjbsmpgtjSMwwRjP19PyZFdS6V064lu2oLYHAGcCDJ7HHr3rOeE1slluXEA2mRjyewznBzGeK22hskoxRlDnKIxbacZIKgj7cTXPz5NctK/YZDc8OnHe4R9RJ47ma8qw/4Wn60QMcmT65pUvw8n3YekoG1nmMv86/UHM/2rx3iNpM8CPT0z2HPtXllVLklQZyD3A9vQ0cLaHaScAGR7n+9YfRtike2dZC7AoJJ5HJjjke04jigdVdcSABAwAOSe5M9jV30i1aEfGVlk+V48ggce8/2qq0jFy+3O1j/wDHdyZ74496dpl4afNlsC0rMQZHlYnJ4EZxxPP0xRbdSuIAbT7OG4AIaGBg+m3tUl6xyBkD5Z4nsI71Pf6dIWVYpHnhZAIOIMQSR27RVY9VNIlFajsSWuFWOWBCiQT/AMwgkD0zyal3EEhf/l3H0PsDx/aidWnyhMnhZwYERjj1NeW9LeJJUE7MkCIPf+lC7cnpdkoGF2PMw3GckiJPfH2AipenaW2XllLAciMDt7yD7RMUevTr98lhbInzKOMFRnPvTdWl7TDZcO0mPlPzbsQI5zPNXDHOK1ST+ZCu1bb7vntoFmQFAAnPmEHAjt2n3pX9MEBMKo4HrkCMcngc+1FabV/CJYW1uBhwwnA4GflmOfpUVwhiHYDbE5GFM5+04oq1U/XsQ86exL2zbANwfqLRwJPfBgczxP0qTWa91ukvC72JK5I9dsHkH0OMUU1+1tdEFy2Tkkt2Ppj+lN09tfmcOzLA3MBx25+bnk5I/NFa4T72Sga9pwQrQS7A7BMAAGB5slZjsKnuqptFyPMBtGAxXBUlS3ykepkD+VxokuX/AJChIAJJO3E44H1qp6npTaa5bu+YkHA4iJBnuSZNHpdKUeOLLYJobCi2fIS7GZbk9xvjkRmfSRQjXNsMLfqQQJ8xHPHvVppZBW5G2FAQE/MMDKjtjk1FftLEB5KnadxIBEdhwR25oHB1bf8AQJFbu3N1klyqiQ+0kAe59VnGcA0tULhc/pVSCe3rOO/HHanabSXFZfhCXjb/AMpX0juOQJ9DVo+lcbWuWypnhlxkUSyZKtcVQQF0zUPaJceUg+vKg4+5/pTtP1p7hMqCDtVg6gghWkA8Yjv6TUdy/akWwcnJI47iCPaeKktKlvys+8mQcGfmI7xjbSllm1er3/EllffuFm3AELGFUwFMsT9sj8USnUGSLnLFo4zgYMccknihdY8OFUgB4I82IH6eMHM1ar+7IuogMruKkTEwNgH5z9amOTunt79wSJLttrwuudswWA4AkAn07R96ns6Nbl2LNzy7QZMxlZ44ERx6TUTW7L/GAbY+WNtgIjcDtUziPeeKARyqh1J3F5bbjZAHfvAp8pyjz87L45J9XokS6V2kMoIlZIkziON0n+IoC3dtooCiF2gPukHgkjzRmWb6Ax2q4RH1L27ZUC2sspaRiF8xjJ+571U9f6E1u7LkNvYNIJ2+Wdvln3zUyK05f+fkU7W6HWjbJS6NTbtqfMpglomNpEYPHOK8s9LGoBNi4EO7DN8zwCX2Y8s8esTEc1HZ8MG9be6biW7ZQqVxuJEzA/3zRbXSotqpddgA3qdxkHDgtkGDBAFW41Hfb82/zIvczVnwlbDXluBgxAkGQZ3BsCJBiM1Y9M0FuwBsEDsYnjn1kie8kifWi+qalbuoZlLQVB+aZwO/c4p9tJPMFRO0xmMyT3PBpE8ztpytfa/QpB/xPMYubWfnIPAJk5kGe00v2KIXb5iDuyZAHvwZ9Jqs05KkM04cmTwZyMduauxrPibQCXZRECT3J/PamKcWt3v/AD90Gn6mZ8UdJLAtI8vAn37f6elZGzeZW27SPNAaeROeTk5/jXQNXoUYOj7gpOQePXkZEQMe9AanpCHYSRnMHOAMf+abDLGtL/oGcVdooNbrrbLJAZmDHJgAYCAgd5kzVO6rAjLHmDJxwsCPr6miL2lBZsQwwSJhR6GYxMciOKhvWgNoKCBiR6zJMT7c1th5VVinuAXAWfc2TGM9vWf4V4NIrAiADM+/5q30FxFYhxCMCrDvnEip9V09LZG1xcSBnK88rB54596rxdyIK6Dct/DFrY7EZ8hjEgHjJOeBz/La6G/8GGBmFIiPNkjAj6VzzQQLoKtDD5f4QYrXHqal1F/Lnv6EdzHc4rFla1WuRuNlpcu33O8gebOFpVAvWvh+QSQvqsn70qRrXduw7ItOsyeD/vtT7luGgYkGfccxXlKgik07ALV7927+6a62wAALAx+BVprLFu1ZYW7YUq23d3b3afm+hpUq2QbeOTfNDFwZrR2ydzsZIaPvnP8ACj+meIL9suqv5QeCAR70qVIh5Vqjs/YWDaVjccA8t39O+BRN1AhtoJ7Z+pilSrPD4NXe/wBgkWvVOp3DpWMw1u4o3DkwJB9vpVD1pXe4rNcJdtrbo444FKlW3rZPw9V77fqyMFuNAYETJ/p/s1oLHQU/ZDcZmLMO2AB2x3pUqDpIRyNuSukSKKG5bCozckYz3HH9amv3yVVfVVJ/OB9qVKsi+FlDHBYTMQBwOwo7T6XeoZ2JO3nuTtif4UqVXidugg3oemSFdl3BpG3jtgzz2onrPTbdphsBEpugmcggd/rSpV1ceOPhPYj4ALuqf4ZZTt8qgQOIfse3NCWLl7UI6NfeEBfPmn1HrFKlWFzlJxTezX+mwWULIdpcQCucDJz6zj1qXS64vd2ON37s5mDXtKl5ccVjtLsK7ols6gXLu8rGzBUGAwCgfajbHUGWz6rccKVJmAFkCSPU0qVPvy6u+/6BJlb+3+V/IO+QYPGASKvOiMLe3YogjcwOd0Dg+1KlQYJy1clxIF6i++2WO4NMA/pgwM9/9KHvw7vuHYcfw+lKlWbNJ7fj9QuxFpTBYjED7fiirV7cFMKJJwB7H+deUqltIohvWQVBiCTGOIiQIrx9AGUksZIyfvSpUeSK1S+hEMuA7/g7jtWSPxR/hXqty1p7ly2QP3hEETx6GlSpmKTjCUk96/Yi5I2uM7NcYkl28w9woz/pQOlvh7xsbSEBgQcjE8x70qVWknnSfFJ/mWzPeKGNu8VTA2wZEk57mhepWFDeUbYCnHeQJmlSrpJJQv1FS5Zbtct/DuxYthoXzAZwBWT1HVGcqsAeaD75ivKVDgWtvV2ZUmS9I1Z+ME7NgnvAyKP65fKXQozMSfz+KVKlzivFS9iLgRunuSfvSpUqTSKP/9k=', // Replace with another image URL
          }}
          style={styles.heroImage}
        />
        <Text style={styles.imageSectionText}>Your Donation Makes a Difference</Text>
        <Text style={styles.imageSectionDescription}>Each blood donation has the power to save lives. Your contribution can help patients in critical need. Donate today!</Text>
      </View>

      {/* Testimonials Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Our Users Say</Text>
        <ScrollView horizontal style={styles.testimonials}>
          <View style={styles.testimonialItem}>
            <Text style={styles.testimonialText}>
              "I never thought I could make such an impact with a single act. Blood Band made donating easy and rewarding!"
            </Text>
            <Text style={styles.testimonialAuthor}>– Sarah T.</Text>
          </View>
          <View style={styles.testimonialItem}>
            <Text style={styles.testimonialText}>
              "Thanks to Blood Band, I found a donor when I needed it most. A real life-saver!"
            </Text>
            <Text style={styles.testimonialAuthor}>– Mark J.</Text>
          </View>
        </ScrollView>
      </View>

      {/* Call to Action */}
      <View style={styles.cta}>
        <Text style={styles.ctaText}>Join the Blood Band Community Today!</Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingBottom: 130,
  },
  banner: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#FF5C5C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  secondaryButton: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    marginVertical: 30,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  featuresList: {
    marginTop: 10,
  },
  featureItem: {
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  imageSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageSectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  imageSectionDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  testimonials: {
    marginTop: 20,
  },
  testimonialItem: {
    marginRight: 20,
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 8,
    width: 250,
  },
  testimonialText: {
    fontSize: 14,
    color: '#555',
  },
  testimonialAuthor: {
    marginTop: 10,
    fontSize: 12,
    fontStyle: 'italic',
    color: '#777',
  },
  cta: {
    marginTop: 30,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
});

export default HomeScreen;
