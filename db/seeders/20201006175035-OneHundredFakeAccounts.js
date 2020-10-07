'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Users", [
    {username: "Cierra14", hashedPassword: "$2a$10$kt2YD0D7ii9G2IKuaE.CHuw5/OzS/s9RpaDtD5p5lm3xJ4PEoaavC", email:"Eda.Reynolds84@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Charley_Breitenberg64", hashedPassword: "$2a$10$SCXntsoiBr58zL2tW7xYyeTUbBYuO2XBnoNOed87q4WDNujVTVjlO", email:"Baylee52@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Elisa39", hashedPassword: "$2a$10$xg73AERq5aXmeLEFBGEtiOlTimPM6I4HwO/RpLuGim/Y7QYFV8JNm", email:"Roma42@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Odell_Goldner76", hashedPassword: "$2a$10$TMoecrVOO3JHsexH.GFiQ.Tr4I/ptJeHsF7WGpHj.PmUmnlY9tFF2", email:"Tamia66@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Estevan_Mraz70", hashedPassword: "$2a$10$6igblXBZ7lUYttfi1QOUN.jOunNm0EuSbosJ4e5W4jRL48kv8ppQi", email:"Belle67@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Mckenna_Rau13", hashedPassword: "$2a$10$22.cuJ6U0Mf14lXVT40xT.k.tQYd/a0MD1Zx8qMxHn93oEOJc5RSG", email:"Korey48@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Don_Purdy88", hashedPassword: "$2a$10$08hnr/klmRG.lmFDFZWL.Ou8koVKn3fhK.gXGwY1DQrjtNk980uPi", email:"Dameon.Grady16@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Hildegard_Rohan", hashedPassword: "$2a$10$c9ErLDJPFykOSJsJsCrapOywWvxZ45W.JmZTdXLDuA16K9fPTZILW", email:"Buford.Ritchie80@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Dejah.Rosenbaum78", hashedPassword: "$2a$10$/svxHZdPKPjpWe4xCbFqWOU7uDZ.bVb05FKTAwJPXLCAim56yaRR.", email:"Albert.Ondricka57@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Jacky.Rogahn", hashedPassword: "$2a$10$m83VQKRgHFwyJipp5/63WeTgcE3rqvaP0Z0cu.lk7Z8JI/mrXdMWq", email:"Veda82@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Kameron.Brakus", hashedPassword: "$2a$10$OD/qje/HSODyV8nrGuR5FOnLTs7evYOcTP1GJ2p87Nvjqcd1fYiVq", email:"Hadley_Schmitt68@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Marvin_Herzog", hashedPassword: "$2a$10$PuWv1.ojzJ1eFFHXLhjmWuO5ycnQ2LAFQXMW2WvyCqEg0oEtUdENy", email:"Anthony_Russel@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Keyon4", hashedPassword: "$2a$10$WSCgjTZnFgCivMuhNXTrX.aYazu5OOzBDX2IP3crp7jhdzVf5mKBC", email:"Muhammad13@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Joan0", hashedPassword: "$2a$10$HmbC6R96Sbuv4C.NVHKzmeQxNWEbfcWWp/hCw8UUqNhbPue.ELTcC", email:"Angelo.Robel@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Anabel.Lueilwitz", hashedPassword: "$2a$10$oK9N22e2xcaM2lsi7Dq34uDu8jpaeZOFwDNNt0q8FAQJFw.1tNA0K", email:"Jace22@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Clifton_Kuphal10", hashedPassword: "$2a$10$RADCozHUWO5jNGvmZLg6COqMWAm4XXn1uMoyUqVIvxbj4Hx5has7q", email:"Wilhelmine58@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Zander_Kessler", hashedPassword: "$2a$10$KXigIFBN0k92.QMLZrbG3erlLGeHe5UXhNLw7OuaQ8yMnjULXJbxO", email:"Michele.Kutch@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Guiseppe.Lakin", hashedPassword: "$2a$10$vKVlnOk1Y/iKYXdK49yEQupzmJ.FjexcZEWOcE7DyQ3/pY9bvooIi", email:"Victor62@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Zelma_Rowe", hashedPassword: "$2a$10$v1zBZGiwCXgmwv4KckAEsOjvy4lZZKYCKh8stY.osX6Y4W2qyAVHO", email:"Jermain97@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Cathrine.Bosco", hashedPassword: "$2a$10$QGwYUvyk556JlgccqfohHO5MpZIwRnJlS5zAVHgajdXoOOuD2/WV2", email:"Dino17@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Carlo_Collins", hashedPassword: "$2a$10$fIzTVN75s/KQ8txUMqCsL.7TuhXXuPuAhver1flQ.vseZZp.eaxQq", email:"Josie.Gaylord75@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Eino_Mraz", hashedPassword: "$2a$10$s8cfIzFEKaqtmbMbDVXctujYycTJez8pihZcflUojqV5K7grX7Zz.", email:"Nathan.Reichel29@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Sterling_Botsford", hashedPassword: "$2a$10$MoPNgy9/z71f32NpAetJQ.ezlzxEN5Cr8nkUkOLQKfyvjgY6HK6ES", email:"Chandler_Kassulke@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Ava.Wiegand6", hashedPassword: "$2a$10$A2jtvPH.utvnKEbgzNWkmOXRIGS.60cqnBVFinmrzP6n6p41Avt..", email:"Raleigh77@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Obie_Wuckert84", hashedPassword: "$2a$10$c36PZTOQ38Do2FuKFwDUWO/8ZHXGOq9Gp9QVtHC4R5lH0up85y/.e", email:"Annabell.Ward50@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Estevan_Gusikowski0", hashedPassword: "$2a$10$06u4K47BcC9PAiA5T8aVV./wo8XH09ZjlEVmQwGc6fUklCT9e2C/G", email:"Adolfo.Orn46@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Bertram.Wisoky66", hashedPassword: "$2a$10$KbVflRHDN2WTCksj5vtn6udFGKG9hNR7KFrQJFkwvAJ1xvTSJ9Tgy", email:"Pierre_Schaefer@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Coby50", hashedPassword: "$2a$10$Kfw.1jNasyNJfZ3wMgLV/uLU.aTcLfpI9KSY0EUohimzNrZPSr0r2", email:"Dedrick_Schneider@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Kaylee.Leffler", hashedPassword: "$2a$10$5pQKjKK5GnMJvn44ucPWru6/InrSSlKk0XLTxME/krhXTZP84WTwW", email:"Lyla_Bruen@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Claud_Bernhard", hashedPassword: "$2a$10$TG7Y3A9okQMh27CCtdYTA.fvxBhxP/usEV71fvjTF38jjJnBFIffS", email:"Jared.Russel@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Delpha.Langworth", hashedPassword: "$2a$10$54TV1mMgRuBevOoT60ynt.RaXkpOKovK7wvrUC51E9SLXy1XlehRm", email:"Shanel_Rosenbaum@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Sigmund.Rippin", hashedPassword: "$2a$10$zDMAlERAQDzGAbT0XiVEUOQIw.PjZ5tPa4kannRbUrz.w5d0ZRA7a", email:"Elinor.Wilkinson34@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Bridgette50", hashedPassword: "$2a$10$b3rZQnVctL4KkOrOO.kSOOgbUxjlpHUkzNGIq0BRJw2.0jE5/3xga", email:"Kameron9@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Curtis95", hashedPassword: "$2a$10$gg6zwdN5wj5YduQcfhkMW.ppGgMWGeS6XyvIv..la7YDEjAWgZ8Re", email:"Velva_Erdman@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Suzanne.Crooks64", hashedPassword: "$2a$10$UFW4DDan3CN7A0pPtOmx2urFQ.pid.SjLrnPHKDXFzlrM99DbrPtu", email:"Gilberto9@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Ramiro82", hashedPassword: "$2a$10$dxz.RA4sADZbPhQsZMIwZud0O4X1OyaSmZ/bwXZQjLDUqaVXf8lNi", email:"Al_Orn71@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Marina.Hintz", hashedPassword: "$2a$10$oAmgUQaRuYy6LtRsSDEy1OLbVGiBA8w05n55NZJaujTxfZmha5nU.", email:"Stephania70@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Arjun50", hashedPassword: "$2a$10$SOysHF1bHFz5Rrln3EssAedQiIIWYgtoFYci5eGmpkR6nkhB2IuNC", email:"Patience.Hermiston60@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Prince.Stoltenberg66", hashedPassword: "$2a$10$R9q7a9LOK30tMpMmfcf9lOPLpMEn39lW9r7brj6/.xDNImF4Abayq", email:"Earlene55@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Raquel68", hashedPassword: "$2a$10$TlWcMEzJSpENPgg7WyxYF.o7VgRpCxrBoKEOreqZ8gZYwdy98wYkG", email:"Veronica86@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Eileen_Gulgowski15", hashedPassword: "$2a$10$fsrm8vAIcwKDf7gvUmW2/.Jzs0hdQKnQH1jQgdLj2WLEPHS7.0OqC", email:"Robin_Schuppe@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Era94", hashedPassword: "$2a$10$nguyUJPeXCR/e9I9obHnWOX93KJ5o0l2I5O6N8G5WfjuJ5AKTFmbm", email:"Kailee21@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Coty97", hashedPassword: "$2a$10$RT1BNGGM1RlxiHJ1tCCcXu6nMa1ykiRmL3.by8ochnA81LV0u2Lv2", email:"Jamil10@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Reva.Borer59", hashedPassword: "$2a$10$8oksXsifCoZv0CWLQ/L3H.jSRDMfi3iEui1nZvZYEBzZ2bYfXb9te", email:"Annette.Ziemann96@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Carolina95", hashedPassword: "$2a$10$ARBXeBQatS0jtFeFpYCxdurvw48W2T4ViF6n.NjvSVw3BBlcc2RGS", email:"Daren.Tromp63@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Magdalena.Mosciski36", hashedPassword: "$2a$10$8Dl75j6DTUVzN.5nsgz6z.Kx0cYsuVisidxHK0lsdGuA.8Sdj3pq2", email:"Anjali.Bechtelar66@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Kyleigh_Kovacek56", hashedPassword: "$2a$10$YCkWYG8qjJ7zYCJyQ11K7Oz.hHXzf/Ke0OVyVHowI4FVQxPXCJL5a", email:"Vesta_Fahey11@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Vaughn_VonRueden", hashedPassword: "$2a$10$2EdAD/P8yzBiGcaRX35sUeVPSU4sPFXHYz.i3Gh6Zf/YOjm8BkKKO", email:"Lesley.Wuckert@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Rhiannon_Ondricka98", hashedPassword: "$2a$10$5A6yqGlYCEEdOjNQiCgGb.hQpNN16PNPn.hMoDM2w.9Q5mk1hVWEW", email:"Bruce.Watsica68@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Lionel75", hashedPassword: "$2a$10$gKukMNO9mnp9kdwD5mq7hOmI5ok3Wj6hubQF4tV9BafyctclwPJqy", email:"Anderson94@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Ada41", hashedPassword: "$2a$10$zn2AOgI0STaeQSvFW5f6d.0sx/Xm1cbddcqe3F2YYLlTU8YS/qJQa", email:"Delilah.Gottlieb63@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Angelo_Denesik11", hashedPassword: "$2a$10$l3fjrYU5R2pKmJOvml5qreWWEu4buhZSvvtmuWv.u7781lKzpahuS", email:"Olen_Glover@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Torey_Johnson", hashedPassword: "$2a$10$jd.w.1by2qciwsuFWLmECOJLodHgtHwBftDxh3Z7b29t/MfzNL4Ky", email:"Ignatius.Dibbert27@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Judy65", hashedPassword: "$2a$10$aCjIX0nRii5F9n5eMqT2LOaF61DiwSpTeKz2KTHJ8Hw5AMKTPGWQK", email:"Annabell23@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Khalid39", hashedPassword: "$2a$10$vPq8to9v57A0JNivvMfIYuH7Docvvn1867t8Qww.wNxs5dGW/TXqK", email:"Khalid15@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Ocie.Ferry5", hashedPassword: "$2a$10$cYI0h8meFHz2u7hB4VgkAu4pZadaTVtiuTGWKobfdqnB.HQ.hu9VS", email:"Tavares.Muller@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Gregorio.Bednar", hashedPassword: "$2a$10$ns9Wn4LY6NHIitBALizcP.rNh1KWa2uf8kjeodSkhschaJh8utVqa", email:"Michael25@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Shakira.Schmitt41", hashedPassword: "$2a$10$8UAQjayXRHfBDdIN9BrOxe.N83g8g9lgh7UiiTl5N.cVTtXzoAM66", email:"Billy_Pacocha8@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Anthony_Klein4", hashedPassword: "$2a$10$a8sG5de52d2JTk3R6Z1GpOYIk2F3rQX.VIg1.o72t4d85IurtdE8u", email:"Carlie35@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Skye27", hashedPassword: "$2a$10$scQG2p3GnShW65rCLg.5s..ApgUoONtYDXKTq9FJmpQ5yDkiLMKaS", email:"Jameson_Schmitt@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Edison_Gorczany43", hashedPassword: "$2a$10$drq0bjikQIXiZieXivcgD.j0teaKtxk7c67M4EDBfBkl39YbR/aM2", email:"Delaney21@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Baylee_Bernier", hashedPassword: "$2a$10$8YAWwMX.Q2gQUJLjyRwkfuIdRmyH4NETZePk2ginTAMzLBWXM9Y2G", email:"Orville.Cormier96@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Shany.Durgan90", hashedPassword: "$2a$10$FRhr.3zPyhoGMLBDlKBngOH5VE9VNtWHnQRvnH.cdU7yc3am.3svC", email:"Abigale_Johnson@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Ophelia_Corwin72", hashedPassword: "$2a$10$yvwSGjmeN.7I5HOecNpYxe/gAVTs7XeK432fiBpaPMoNgd/y9l.zq", email:"Reece.Keebler@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Lenore15", hashedPassword: "$2a$10$WvIbyOJtp7JHDLRpsQ4AL.oaLsZrmGDeLxDu185xw1kEGjgSL9tBC", email:"Emery_Lynch@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Tianna_Borer", hashedPassword: "$2a$10$BdkThGFdqvflRLlCtKH9cecd404MeODtynZ6wxME9A0vX0WvoH2N2", email:"Frederique_Kozey@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Milo.Streich", hashedPassword: "$2a$10$vUulhYTsXD50Z5VV7.fXN.f58J4QN7rFqxkY6c2p1dK1h6NugXrCm", email:"Tyreek_Johns@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Erick83", hashedPassword: "$2a$10$88BQM227Cr3wsSbspNkwueNORIne1yJC3cmx47HpPlhHvl8rKurUO", email:"Cleve.Hills39@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Newton.Wolff7", hashedPassword: "$2a$10$S5iqQEpuOlNrPJuXjp89ceV0cdbLh9E0y.N1UFcJ89ByLNvSFebQ.", email:"Donavon.Tremblay95@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Furman_Feil", hashedPassword: "$2a$10$WO8g6xL/4ifskEfkGdge/er1L.rVA6Lkt6579MSA9SH2lJavI1eaq", email:"Demetrius70@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Samantha_Johns", hashedPassword: "$2a$10$juu3LQQKxUri7UuOVLLDgeE7iXb6HFk7jr6WtnKbZkpHKw.e.fio.", email:"Werner28@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Matilda_Hauck", hashedPassword: "$2a$10$DznrV4YWf7UwZIXqO92p5.UAiX8SK2C6kC3WNVyIhKN1jH2ieEu8y", email:"Catalina10@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Tavares85", hashedPassword: "$2a$10$WzkjyhNlQiCqYKTRSZBRzeGjH7W3E8IdbILdz.A2ZnIn8fZNMjcpm", email:"Judson_Pagac@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Courtney0", hashedPassword: "$2a$10$t7D/XFjx3oa7hdGRjWtBl.XTt3VSaJIKK6rQUp6Mrc.pcDOcjhEqy", email:"Stacey16@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Ken.Emmerich", hashedPassword: "$2a$10$m0pnKQKgfsK9PO64QoghuOpUL8xlFxayCnuUxwiD6Rk0zNhs2dp8u", email:"Jack32@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Emmitt11", hashedPassword: "$2a$10$RzZ2uZ9DSMcZjeoUd2CDo.qkGa.xz9xG3aeikFVCzoG8oXXf8zAcW", email:"Abbigail_Dare64@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Jayda.Crist", hashedPassword: "$2a$10$fjYvG37gRM5Qy7HKYyoDVOGjdaI2.ivyf2GIEWuywLAOTTKNTvwBO", email:"Keyshawn.Jakubowski17@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Luz.Nicolas74", hashedPassword: "$2a$10$cIkgid4zFR.8T9VrgHPy6.5W/7HhqrtPf2rHIvwOc2UYbW9VYHFQC", email:"Lea61@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Autumn_Bogisich40", hashedPassword: "$2a$10$N.Q1268H3Q50WcuWTf7/y.MroyB3iAQZS8MzlUQlAU/cG6x9nemem", email:"Enrique58@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Norwood.Hamill", hashedPassword: "$2a$10$AJQaw5d2zwkNPdDXWJh0rO2h7M2AilKuqKpYFGywxZovYQPxXUpRO", email:"Andres_Stark84@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Renee53", hashedPassword: "$2a$10$1quVnCTIpB220vKqehVA2.d9p6V/96NkDR8BBH0apYgCDjBgC3yNG", email:"Moises_Hoeger@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Makenzie_Zboncak", hashedPassword: "$2a$10$5xxsHEdqPCaWUfdyfN3vaeWfwwsUlApIVd5YwuKN6gxydNcgLHd4K", email:"Mario.Kuphal95@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Warren.Kuhn", hashedPassword: "$2a$10$TdQz2XjxKY/.ZCwXFXpqC.G6WCK8tYGWSxj2YRbzqz2y5locThkK6", email:"Andrew_OConnell@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Roberto97", hashedPassword: "$2a$10$/dUsc3Bm4o2N/R9gqMKQwu1GBuRnTwgkABRdv.m4JReT72fZAUkuW", email:"Elizabeth.Jaskolski@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Johann15", hashedPassword: "$2a$10$bn5N6h9O62q5V3yCbBj9TOtyT6CJDPsx93O/pGcbXKXmk4CDy8eO.", email:"Jake34@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Adrain44", hashedPassword: "$2a$10$P6tJuXoQ2Gj6oVYDR9PW6.jB79VbLjvHVcrlZiJFQGi7utYx/POhm", email:"Nicklaus_Rath@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Mariela_Moore85", hashedPassword: "$2a$10$9LLPCj6op1XmjF70UzQZduGnooRH5nvgncPzg4bJiEZUc9EsupcJi", email:"Estelle.Herzog7@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Cristopher.Terry", hashedPassword: "$2a$10$rOIS033jwdME0nyTeO1yAenFCR3.dckW/qYX4XOiHbnSVn/oZSHsy", email:"Emerald98@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Dock.Tromp15", hashedPassword: "$2a$10$lcv.QDRqVaOxTz4mkrUVNuGFnBMzrJ3pgorxInCKI6gto2/Kl3Ze.", email:"Drew.Grady1@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Jewell_Goldner", hashedPassword: "$2a$10$hbMc/HDPh45xaufcf2tFneNlEKJp0XrnXkEhAgZzUpac8ZK0qwBmu", email:"Brandy17@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Marielle71", hashedPassword: "$2a$10$3YLHk5N0su2rXck.P4msHeHOZNTTdQxAMzY5KF8.PqE0ACgD3nseq", email:"Alan.Glover@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Solon60", hashedPassword: "$2a$10$YTvhLU34cgS3bp/4LsCA6epnMPwtAVoi9wcwsu..juMvO2r2xPhcu", email:"Lessie_Kulas52@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Audreanne15", hashedPassword: "$2a$10$1NHALS2CbDmUG/uj8s.zz.MPp8ZbAFB1ig.Woi.1PpuZBfAOB5FBS", email:"Guy.Powlowski@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Alessandro68", hashedPassword: "$2a$10$8Js10HKqmhy9045aSGnQLuLOAjqOKiGbxu.r9F78hEpxDogn86pji", email:"Imani_McLaughlin@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Sophia_Considine", hashedPassword: "$2a$10$PwylSpvmauoxv8L3AJ6KZOnya1ZL7W5/2SNR5zKiWaO6fgU0rNqb6", email:"Casimir78@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Winston_Gerhold6", hashedPassword: "$2a$10$jSlqLCX5mrMDubUpkTkJ1ejhcsZDSGFizTMOOOJ7F6OGV3BtwnvhK", email:"Flavio.Heidenreich@gmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Brenden.Schmeler49", hashedPassword: "$2a$10$Uh2GDe/YZBgugnCA7S8r6e8cBRdabdMXaMQ/O3xL6CR/.hqTZAU.2", email:"Laurence68@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Armando_Pagac3", hashedPassword: "$2a$10$in/CCrt09YbHGpk0JPitWOHZc8YqoaGYPc1lj99BrEJI/rNxmJysm", email:"Lue.Stroman@hotmail.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Dorcas53", hashedPassword: "$2a$10$Sf/wTZD0.DVS1trx0qWTj.c0yeG8Fu2NEoUVc3K45YDLmX0emfZxS", email:"Edwin_Marvin86@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    {username: "Orland.Keebler", hashedPassword: "$2a$10$KjW1XUyaneaky13Vn.xTn.RjdWsKwlWc76tnHInBfYfmm..7rGJ5G", email:"Myra_Funk@yahoo.com", createdAt: new Date(), updatedAt: new Date()},
    
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Users", null, {})
  }
};
