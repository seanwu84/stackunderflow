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
    {username: "Samara.Jast", hashedPassword: "$2a$10$Jev8LkI5Ww9CBy3mGzxzf.8GB.omCOUctnx.w98GfZf9/qvfurvjO", email:"Brenden80@gmail.com", createdAt: new Date()},
{username: "Jaylin.Schneider", hashedPassword: "$2a$10$dfg8AG/HUlgZMEVjXQbI0OvYWUL8B6lAUYZ55k6gpymI5aTDVx2Tq", email:"Laney.Rutherford67@hotmail.com", createdAt: new Date()},
{username: "Esta.Bayer", hashedPassword: "$2a$10$Qf6Px02ZeDs9rfePSxJyWuk49xqoVDgVD/xxfp9R1dTVyBmgGMxGu", email:"Jermain.Herman77@gmail.com", createdAt: new Date()},
{username: "Gussie14", hashedPassword: "$2a$10$GVZwjrYIaWjAv7uq5uFyLe3Ds8Z91A7TI3m1p63G8UEaEyAjVBgCe", email:"Ford70@yahoo.com", createdAt: new Date()},
{username: "Naomi.Sporer", hashedPassword: "$2a$10$1Rqo0LMvOamvFiErH7XBr.EKAv/kpm5beQqzzpzoYcSD2pMcbH6GO", email:"Conrad.Roob@gmail.com", createdAt: new Date()},
{username: "Janet23", hashedPassword: "$2a$10$d6IYTAnBGyvH89MqtN01d.5pRDbrY0Zu150jn.nrQYmcRiHflNGzG", email:"Jackeline51@gmail.com", createdAt: new Date()},
{username: "Frederick15", hashedPassword: "$2a$10$w5TSR.T31HkUNDsQGqZvKeKyG3UmVHu0EGOuj5lskV4QlsWDOFx/S", email:"Nolan.Raynor@gmail.com", createdAt: new Date()},
{username: "Anderson.Ziemann78", hashedPassword: "$2a$10$jWW5E3PphLR256MTtasKruxotmsrmaSzt0NJm8CqapuHtIg79GdGa", email:"Madeline_Pfannerstill@yahoo.com", createdAt: new Date()},
{username: "Asha.Zieme", hashedPassword: "$2a$10$fnA9O5oCen8NCZfroHKunuASQWLTTP3ttHwwLsKerTKgLEMajhGIe", email:"Devon90@gmail.com", createdAt: new Date()},
{username: "Maureen_Gleason44", hashedPassword: "$2a$10$KtDnXlMPWF9Q8mf2rmh4RuW0EnFuve2MJG6DkDgz2UvAFPdXys1ju", email:"Lavon.Stokes41@hotmail.com", createdAt: new Date()},
{username: "Madaline_Daugherty", hashedPassword: "$2a$10$lPIBUDxEWaGJpMUb3uo9d.1psWGsp7f1P//KhUfUCJpufKbH8x3Hy", email:"Neal_Mohr@yahoo.com", createdAt: new Date()},
{username: "Lonie_Stroman", hashedPassword: "$2a$10$Pi5mBjiE9OFGNBxJLIc9auIefdeiF4WT1YTWTOFLcYOCjpTMauM8.", email:"Taryn13@yahoo.com", createdAt: new Date()},
{username: "Velma_Smith", hashedPassword: "$2a$10$0.xtxjQNCAfHzHlEGNlE3e59JqGuw.WR0SUFpTOnspdSUybVPr7dy", email:"Maci23@yahoo.com", createdAt: new Date()},
{username: "Raina.Hagenes53", hashedPassword: "$2a$10$lFMj9rSNNXqGdBptJiI71.dJe0zEHS4GMTbzg3tlUoicL26tgGkUS", email:"Verna_Grady@hotmail.com", createdAt: new Date()},
{username: "Greyson_Leffler", hashedPassword: "$2a$10$GMYAsEM9X0E0d/RAE1ep5.zRJ9N9ho9MRFw/ie0dZj4yUJJ/uTnsm", email:"Ronny.Altenwerth@gmail.com", createdAt: new Date()},
{username: "Curtis38", hashedPassword: "$2a$10$c484Jwr4jmbvuIojgFOWVOtANCcP2AopuiLkDHEJtAD76XFwJ2q9q", email:"Herta91@yahoo.com", createdAt: new Date()},
{username: "Rhiannon.Bins", hashedPassword: "$2a$10$bE919aSBFj2nY5RX3JTWD.QYCHDDwAPyLNVEiZCnCM9mvw30g4wHC", email:"Marco15@hotmail.com", createdAt: new Date()},
{username: "Maryam57", hashedPassword: "$2a$10$VKzC8/CYvO0owvIF2zCMqeNOeLF4uOKUURiEUM9eI9yG.JxC/lwqm", email:"Rene.Hayes@hotmail.com", createdAt: new Date()},
{username: "Ernestina14", hashedPassword: "$2a$10$Fm1pJQl9DCQPaMSx4TSPW.no1P61Oc8xWclNza33ToHCz.yy6GUsy", email:"Demarcus_Kuphal@gmail.com", createdAt: new Date()},
{username: "Lewis.OReilly95", hashedPassword: "$2a$10$eI.2p3sCn2EFgSm8VmuLNeuhk4i.I2915GM5HZY2/KmoFD93xQyXi", email:"Jocelyn_Mosciski47@hotmail.com", createdAt: new Date()},
{username: "Bettie_McLaughlin", hashedPassword: "$2a$10$3PnGQDcGwyjT6d.HaOA4eOGp4PVH9T9.gWmElvWbw2MQAgCG2bA02", email:"Noel.Schmidt67@yahoo.com", createdAt: new Date()},
{username: "Trevor_Watsica59", hashedPassword: "$2a$10$HbN8/.pUIkBzAyMEPgWGUeOvMwO82H4kawIIMk8tzz3QQmtVXNU7e", email:"Jamarcus_Reilly7@yahoo.com", createdAt: new Date()},
{username: "Mariah_McLaughlin7", hashedPassword: "$2a$10$NNM8Bz.qtJDh5FBptIPCX.TZGqMLbHxkv5ywnABMS6UcpvT9ZzrRG", email:"Jayce10@gmail.com", createdAt: new Date()},
{username: "Fleta78", hashedPassword: "$2a$10$pY1yl6wSFWmQEyGgYj43RudU0uEc3R9iFDGfX0mRGUn77UZMpv2DS", email:"Elnora.Hyatt@hotmail.com", createdAt: new Date()},
{username: "Quinn46", hashedPassword: "$2a$10$cocDrBJEL7gPix1Hx0MZO.jNo6S0cPzrLYwMs1PMVJZfPfFWmPQra", email:"Jerad.Maggio@hotmail.com", createdAt: new Date()},
{username: "Torrance84", hashedPassword: "$2a$10$OmnJNL6SmbiA7gPr819ECOEH6HAunuD1JjdJL2ctO518cfktc/HBq", email:"Woodrow_Swaniawski@yahoo.com", createdAt: new Date()},
{username: "Althea.Ferry7", hashedPassword: "$2a$10$KW35hExRVjrxFHk9DxO0NeRFqRLMbRKW4bG0syiNR8lJCJJSwg.Ia", email:"Kaylee49@yahoo.com", createdAt: new Date()},
{username: "Jack_Kihn50", hashedPassword: "$2a$10$AxfbxwwcTJQemtFBd2IJ9.REYBQeOwkz6xfZlHYZnIXWWa0svjRV6", email:"Leone_Hane@yahoo.com", createdAt: new Date()},
{username: "Eryn_Becker76", hashedPassword: "$2a$10$nZWUterAzI9s.JY525FITOJGnbVCSViKjQJybKrFXndiub2RQfpru", email:"Andreane_Ward32@yahoo.com", createdAt: new Date()},
{username: "Kenya_Ondricka", hashedPassword: "$2a$10$76ZkwN8nnSRtiHXD/lEt.Oe4mhwBwPE5diE54JfN/l4RSji9ipsMG", email:"Valentina_Daniel@gmail.com", createdAt: new Date()},
{username: "Paris.Wuckert", hashedPassword: "$2a$10$6rlalxNdL4Flmrf0pUyxfu1nc/g7YGaMicZEUvPIF6.iOW8PHqCA6", email:"Winnifred34@gmail.com", createdAt: new Date()},
{username: "Markus61", hashedPassword: "$2a$10$xPmO3G51rmwPIS9it3kgkOaNdG6WJdREwyMhfQWC.eJAJOIbsx5N2", email:"Arianna.Kassulke33@gmail.com", createdAt: new Date()},
{username: "Estel.Mraz25", hashedPassword: "$2a$10$QX9Jq/S/b9RPp2gPjqtlXuXzsC8yLojXqcRIp13wlP41WTyE05Aym", email:"Darrell.Cremin@hotmail.com", createdAt: new Date()},
{username: "Greyson39", hashedPassword: "$2a$10$/USc1d/GFQaiES9MVzXXV.U2rt2LgVHm9rnAtCTxL05cVBAKpBN/W", email:"Luis.Maggio14@gmail.com", createdAt: new Date()},
{username: "Arielle.Connelly86", hashedPassword: "$2a$10$okHZm4T6AccLIYLv5CjhTutty9eIc2o/YSTu2rEqE8087W3jTl8We", email:"Omer.Schroeder88@hotmail.com", createdAt: new Date()},
{username: "Cierra36", hashedPassword: "$2a$10$BFdJla3XoB3kEEmfTMOVK.QeyIllDgKLPOFiart79h2MJScwNGtJW", email:"Cassidy.Bernier@gmail.com", createdAt: new Date()},
{username: "Jamarcus.Crona62", hashedPassword: "$2a$10$.TONNIVeB9axi6DyHYnTsOi2Y04dSTPWYr2QFY.EgNOVUvmJhUM6O", email:"Kaylee_Ryan70@gmail.com", createdAt: new Date()},
{username: "Kaylie.Will", hashedPassword: "$2a$10$/w1ox9W6yXTS0pXENXl9AedwA07xhwK9VVyI6hQ3547kGvT4NhS3K", email:"Randy.Ullrich45@yahoo.com", createdAt: new Date()},
{username: "Esther96", hashedPassword: "$2a$10$px7ziB3KD7nEMM8LSNcuO.nC1sk79vgpBtYSMZsd3n3q00UgAdx4u", email:"Nannie_Hand@yahoo.com", createdAt: new Date()},
{username: "Nathaniel3", hashedPassword: "$2a$10$7hAguIZ6PM7TqrTdpXUI/ucnQby2cBOJ.SER5GJ7Qd8554mlpzSHu", email:"Chanel.Cormier81@hotmail.com", createdAt: new Date()},
{username: "Cameron_Zieme", hashedPassword: "$2a$10$KJAzrCo4iOG.rPDc2fHCHe.o1GQAfDwRsgERCU0zB3jFcqP/uEi7C", email:"Rusty_Romaguera@gmail.com", createdAt: new Date()},
{username: "Eldon.Okuneva10", hashedPassword: "$2a$10$Mqso/z36frTqcAVK2KYM7e1brwyWiLr3.AgypTQykeN3rylbzEhw.", email:"Raegan.Dietrich@gmail.com", createdAt: new Date()},
{username: "Thea29", hashedPassword: "$2a$10$3nA1T6SdfgJdeqGfjc5DluVFnIS/joB1FlRkEo06VxBO5kvmDtC2O", email:"Ressie_Deckow@hotmail.com", createdAt: new Date()},
{username: "Maximo_Haag50", hashedPassword: "$2a$10$/eOnhI2hzMekTKU0515VY.lQfsqxb9n5YQyH1XmIVpl2oyG0MnspW", email:"Trevor_Cole@gmail.com", createdAt: new Date()},
{username: "Billie65", hashedPassword: "$2a$10$DvQG7e7RmGHdHJZkhFiTneCkxjDoZf4Ym7fFzt4jwu/7znsjaD8Yq", email:"Cathryn.Nicolas@yahoo.com", createdAt: new Date()},
{username: "Colby.Predovic", hashedPassword: "$2a$10$JcMl/B9i0WZ5o4zSPuVbh..d8wZchf0OPA55WTiHTK88aM2j5lYLS", email:"Otho.Brekke78@gmail.com", createdAt: new Date()},
{username: "Ivah29", hashedPassword: "$2a$10$A3KYk7R21j.tb2BXdTH7KerBkfvWJHloQBrxNdDNE/VE9TjebJqEa", email:"Adolfo_Green@hotmail.com", createdAt: new Date()},
{username: "Pansy0", hashedPassword: "$2a$10$NJvSQbrXI5YzSgsJQ5npR.48JhvKOS0UgKOyIV7J9VDkJ8nW74fVe", email:"Tessie_Baumbach@hotmail.com", createdAt: new Date()},
{username: "Donald11", hashedPassword: "$2a$10$89XqDvd6TuQ3aJQ5o0yfJ.y/j2WVb/dQBt47/aBc3sO7eewFfc6MW", email:"Ramiro.Roberts10@yahoo.com", createdAt: new Date()},
{username: "Magali11", hashedPassword: "$2a$10$Tc2riEl4rLbiJ7GWKLVgKenoT99H4ZfDNEjpSppcrpi.wRhlC9PfC", email:"Tavares.Treutel@gmail.com", createdAt: new Date()},
{username: "Dusty.Heathcote59", hashedPassword: "$2a$10$7kLKmfUED/oiuvMrxa0oxeLIlTPmoC5g1kc6AkbFBg/0exmQRvAVy", email:"Deondre.Bogisich78@hotmail.com", createdAt: new Date()},
{username: "Lauretta_Marvin", hashedPassword: "$2a$10$wk7IbUFpX6MEvu2HECPOaOCKaKfu9kEZIhfPVRE.QxuKkeVsvNEUK", email:"Robbie.Dicki@gmail.com", createdAt: new Date()},
{username: "Trenton_Gerlach78", hashedPassword: "$2a$10$xYWYW8dr3J5YlpA2MZ4DxeBiWygixkc340fYJDKcxkx6YV9ZoJzhK", email:"Herta.Jakubowski@gmail.com", createdAt: new Date()},
{username: "Antonietta.Ritchie65", hashedPassword: "$2a$10$fEmQ6On4ER1fWXLar1fvpeGRhb.60jjTp1krQdJh/EcCbO/fvUGL6", email:"Candice47@yahoo.com", createdAt: new Date()},
{username: "Keenan_Prosacco", hashedPassword: "$2a$10$s52ETe04OccHXsQyLvysd.XXTbDhnY4UVX249M6GXBnUCaSKXCxZW", email:"Ed_Ortiz@yahoo.com", createdAt: new Date()},
{username: "Orin6", hashedPassword: "$2a$10$UxpaBXyGW49I5RRShgFhUukF4Fj69TXaD8vRyWpJ1onp22LyC0KCa", email:"Lauriane_Wisozk@yahoo.com", createdAt: new Date()},
{username: "Emmanuel.Runolfsson", hashedPassword: "$2a$10$HDMR5G6DsRv/9vq6eH5Jre17DJNiyFFbxnizld36P.CE5qmtU4G.W", email:"Jovan24@hotmail.com", createdAt: new Date()},
{username: "Felicita47", hashedPassword: "$2a$10$EFPJqiDC9rcyLx87kBUFA.buT.tvl8RhvGCkbVv1v0gU.RtunQ51S", email:"Xzavier.Thompson95@gmail.com", createdAt: new Date()},
{username: "Heather1", hashedPassword: "$2a$10$MO9ZKtEu9su2hbEcy2lBT.U94rBQxf9FoZsDJzLewCTSaWmO/Cx2.", email:"Elisabeth.Dietrich82@hotmail.com", createdAt: new Date()},
{username: "Alayna75", hashedPassword: "$2a$10$h6/AYuRJdIfze379Yfm3y.ov9GhVOShFF6Z37yQqQdfw5UpOzIFVe", email:"Xzavier.Flatley@yahoo.com", createdAt: new Date()},
{username: "Justen_McLaughlin68", hashedPassword: "$2a$10$mvYqXrQSKYMxg0gDKi6oleHBQUIVivXyEI2qGdnEozVTkqklqDbsO", email:"Sadye11@hotmail.com", createdAt: new Date()},
{username: "Horacio.Skiles", hashedPassword: "$2a$10$ehQ/722b7wphRRNunyggaOxcFmdkg61KptiYBUNpGomTkg6l5HUya", email:"Savanah65@yahoo.com", createdAt: new Date()},
{username: "Carmine.Jones65", hashedPassword: "$2a$10$OH1qo8MwRyqu/5tEdt5ygu8EEJd3b0gd8BgUX6mD2J/SE2WgiwhUW", email:"Ignacio_Ratke@yahoo.com", createdAt: new Date()},
{username: "Ella53", hashedPassword: "$2a$10$GMf3TmZQSb28wNox9UTSTuMv0dIYNWTzIt/Z7JGBtRg0o7lMMqUM6", email:"Buddy_Boyle@hotmail.com", createdAt: new Date()},
{username: "Cali_Emmerich46", hashedPassword: "$2a$10$uvZj5Rwlq2eBL0rsneNC9.Ty2LonSw9Pwgu90W1BBuwg4sdX5jnLe", email:"Easton67@yahoo.com", createdAt: new Date()},
{username: "Harry_Turner79", hashedPassword: "$2a$10$nPkSZCQ9CTScY0yw55G8gOoyb1BM.H.zcd.2EAJNU3WjMdeDrQ4kW", email:"Alan_Beier92@hotmail.com", createdAt: new Date()},
{username: "Grayce.Zemlak42", hashedPassword: "$2a$10$DtArz2S.f6STvqPHZc5DxepQq1Y9VkVugTvzH7JcVaDtm.QAtvR.i", email:"Crystel.Harvey@gmail.com", createdAt: new Date()},
{username: "Chauncey_Lind90", hashedPassword: "$2a$10$9VcKBmbt37mxrLYqDn64h.suutidKKjCa0iXAMh24zLlznoI9a0DC", email:"Marco71@yahoo.com", createdAt: new Date()},
{username: "Alison.Keeling89", hashedPassword: "$2a$10$Nu800Tqmg5cdrY9TBV0G/OBA4i4ObG827.LR37nJBZy5ZOCCjGy9i", email:"Ernestine_Lehner53@yahoo.com", createdAt: new Date()},
{username: "Clovis_Klein", hashedPassword: "$2a$10$UDsXOM9SnA9D0X45oaDFT.r9682PKiq0KlcGvlzIzLEcoZ//HJdvq", email:"Brandon_Pacocha61@gmail.com", createdAt: new Date()},
{username: "Ole_Stracke", hashedPassword: "$2a$10$nD1ADp8byr8zWNF3bFJ2CeM3YDPcUXwta6Y8NLObFuattdkRVDBF.", email:"Danielle_Carroll52@hotmail.com", createdAt: new Date()},
{username: "Beverly6", hashedPassword: "$2a$10$VQ5CX/1hH5MsTQVLBxlFWuDrvf0FZeRaVqiYjx9QlWe8ccysH9EUK", email:"Estella54@hotmail.com", createdAt: new Date()},
{username: "Rosella95", hashedPassword: "$2a$10$ZT6/zsN1L8rnJ19IovUnBuAsaTqDqbEARCfdi6Txtyf4UzCtshjgm", email:"Hailey.Kunde81@yahoo.com", createdAt: new Date()},
{username: "Virgil.Hodkiewicz30", hashedPassword: "$2a$10$IijivGr137a.2esQParKTOfPf9sAFhoi8xPk04ES7dlJqZToEZqPa", email:"Brianne.West@hotmail.com", createdAt: new Date()},
{username: "Sofia.Maggio", hashedPassword: "$2a$10$AZRHQsNfdpA.xDuAVyOWXuL1CcOsvguFS/AVN227IUZupANp2pCQu", email:"Floy22@yahoo.com", createdAt: new Date()},
{username: "Mya62", hashedPassword: "$2a$10$E94lGwtYw7TKr6o6uF2Ax.MYfFBu8jv.rq.Xte1TCQJUJ.bxHJXYW", email:"Vergie_Larson@yahoo.com", createdAt: new Date()},
{username: "Jessica12", hashedPassword: "$2a$10$bAwBGdisLJjmskNwrhLaP.42krQLRN7rANcCjDadScpOXtnQv1EW6", email:"Kimberly86@yahoo.com", createdAt: new Date()},
{username: "Kathleen.Kuphal", hashedPassword: "$2a$10$oHJk8LtmIv9t4XoYotUjquoGP3T.tAJYq/bRLrsK151Pt7r/0ykb6", email:"Germaine.Kilback36@hotmail.com", createdAt: new Date()},
{username: "Jonathon_Christiansen", hashedPassword: "$2a$10$Acx5N4O6WP8ttWbWSangMuG2wxbKWa20xgo.lZ7hAu.BxV0h7WsPq", email:"Nasir_Keeling36@gmail.com", createdAt: new Date()},
{username: "Nick49", hashedPassword: "$2a$10$bb6UGaJv5oE4mUHQTHrs7OWU149g1zJevqyiWfcwnOUpKxTuu6pjK", email:"Nestor_Stamm25@gmail.com", createdAt: new Date()},
{username: "Cesar71", hashedPassword: "$2a$10$QhmxJaqgly.rLrCbyW9aZuslJdsAApVgAF0urFMHMH4pbUSfoQLRq", email:"Brisa50@gmail.com", createdAt: new Date()},
{username: "Leonor.Ferry", hashedPassword: "$2a$10$TF1tUvgEDT5goqTaiFhgz.GCL9CJFR6Z0o0k/IhyMk.0BiUWbUNse", email:"Fannie.White@hotmail.com", createdAt: new Date()},
{username: "Quinten10", hashedPassword: "$2a$10$mZzQmEyiFhX1bxJwqeqsI.K2THHerXofeXeVrC6YA1sVWP2bwSRzu", email:"Haleigh77@yahoo.com", createdAt: new Date()},
{username: "Armani.Heidenreich", hashedPassword: "$2a$10$DJGOsVLFkEOz4Nrx/wEPCu6aM/p46L9HRBKtuC5EEigHUagqNsU..", email:"Brandt70@gmail.com", createdAt: new Date()},
{username: "Esteban20", hashedPassword: "$2a$10$wtjFVyoDwkfzaEjPVwCNxeR88v/VNiptQjplGUVH/xdJRHFLL/bt2", email:"Verona16@hotmail.com", createdAt: new Date()},
{username: "Judah.Kreiger", hashedPassword: "$2a$10$6IhZq35c5UIH/5UJMZWEJ.qyvUllEd7JkwC9u0Lpec12wKB0WcACe", email:"Jewell_Mraz42@hotmail.com", createdAt: new Date()},
{username: "Preston.Balistreri89", hashedPassword: "$2a$10$Nf5pJc4F7MjU2v8yd1TBFuERLajOLL0v8ieX8Y6SCRNeGWiXQlzYi", email:"Benjamin93@gmail.com", createdAt: new Date()},
{username: "Cameron_Hermiston", hashedPassword: "$2a$10$UlvU08y4gRyfnjjHSQgk7.T8uIi9MmhOAkW7SGXiXX0nSO1SRFM7C", email:"Nia_Stehr34@hotmail.com", createdAt: new Date()},
{username: "Liza.Greenholt53", hashedPassword: "$2a$10$ACLOMHCBxjxnrXDsTPhN4usWd2lPSVuttT2kA3rRVrOhIzSFg3dEe", email:"Lottie47@gmail.com", createdAt: new Date()},
{username: "Carlotta_Schiller48", hashedPassword: "$2a$10$oXvpRIy9KWmXy3X6KMl74OazTXgHfCwZSjzmkFVXrmRlL4MdMc6T2", email:"Abraham.Bailey85@gmail.com", createdAt: new Date()},
{username: "Margarette40", hashedPassword: "$2a$10$6VIQ95DrYoftidflqgrl3ue834xrC6K2NPni/RUYKo2OCS0vxwKHu", email:"Felicity16@yahoo.com", createdAt: new Date()},
{username: "Sydni70", hashedPassword: "$2a$10$uZxN5xoXWhlEVzvMLNKAC.thfBVyVOJXasqtEfGup3bOtkwaZxTW6", email:"Angus_Ferry@gmail.com", createdAt: new Date()},
{username: "Clara30", hashedPassword: "$2a$10$hqWkG8ulqRfRdse0.LE1iuV1miZwzPmAPALQUm7YEJn0nzSbMxIN.", email:"Aletha_Feil39@yahoo.com", createdAt: new Date()},
{username: "Randall27", hashedPassword: "$2a$10$pI2Dc/86NbHT3f1nVvfXR./PUNHM/y1PZiORFPUpWtZrLcczNgHqS", email:"Jensen.Brown@gmail.com", createdAt: new Date()},
{username: "Patrick.Dach", hashedPassword: "$2a$10$4ESE8RKrYXojisGdE1J0yunBjORf0CbStEeOO32zm0ikkUOA9uzy.", email:"Maddison.Nader@gmail.com", createdAt: new Date()},
{username: "Maegan13", hashedPassword: "$2a$10$SzOLO6eCcfO1UPeO.C6tIekEb3zUWzpk/TveoSAykUAaF/tW0KH6q", email:"Letha_Kling18@hotmail.com", createdAt: new Date()},
{username: "Reilly5", hashedPassword: "$2a$10$wMz1HXY9dR.sv9g/WQ7Owerw8.goOXWligeSBNOOS7LJZl5IiSnd2", email:"Barton.Ebert@gmail.com", createdAt: new Date()},
{username: "Gennaro53", hashedPassword: "$2a$10$tBw5Tkv7H..5qG7rDJr00uJh4fI.d3H7KRrnCdwJ.neh84Gh6kdN6", email:"Eulalia_Botsford20@yahoo.com", createdAt: new Date()},
{username: "Myah.Jacobs92", hashedPassword: "$2a$10$uO6Sw7LCFQ1Bfl3gRflOmexjlH.6e7YdSJws.QxpEkz6F5MM/vqJW", email:"Rex_Hahn99@yahoo.com", createdAt: new Date()},
{username: "Nikolas.Champlin89", hashedPassword: "$2a$10$qe2uJ0bERZKWfsF0dYkH1.n2L1XfNa7i5qtx886c75gMxXlKNWO2.", email:"Cade.Batz55@yahoo.com", createdAt: new Date()},

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
