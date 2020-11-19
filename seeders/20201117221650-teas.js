'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teas', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkteas = await queryInterface.bulkInsert('teas', [
      {
          "name": "Organic Yunnan Black Tea",
          "type": "Black",
          "description": "Gourmet black tea from Yunnan province is generally known Dianhong Tea. The main difference between specialty Dianhong and other Chinese black teas is the amount of fine leaf buds, or 'golden tips' present in the dried tea. Dianhong teas produce a brassy golden orange brew color with a sweet, gentle aroma and no astringency. Cheaper Dianhong varieties produce a darker brownish brew that can be very bitter.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Wuyi Mountain (Bohea) Black Tea",
          "type": "Black",
          "description": "Formerly known by the trade name 'Bohea,' Wuyi tea is a category of black and oolong teas that are unique to the region. These teas are sometimes called rock teas - or yancha - because of the distinctive rocky terrain theyâ€™re grown on. Roasted, robust, and delicately smokey, this gourmet tea can also be infused into savory dishes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Yunnan Gold (Dianhong) Black Tea",
          "type": "Black",
          "description": "Dianhong is a variety of high-end, gourmet Chinese black tea sometimes used in various tea blends and grown in the southwestern countryside of China. These delectable amber-hued leaves carry butter-smooth notes of chocolates and dried red dates. One sip will transport your tastebuds to the paradisical cliff-sides of the Yunnan Province.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Organic Jasmine Green Tea",
          "type": "Green",
          "description": "Organic jasmine green tea is one of the most popular teas enjoyed around the world. Hand-tossed, blended and infused with real jasmine flowers, this tea boasts a wonderfully strong aromatic brew. Great iced or hot, let this tea whisk you away any time of day.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "High Mountain Fog Green Tea",
          "type": "Green",
          "description": "High Mountain Fog Green Tea has a wonderful richness due to its natural growth in the mists and fog of the region. This climate induces the production of more chlorophyll, therefore adding a brighter resilience to the leaf as well as enhancing the unique flavors of the tea. Itâ€™s one of the smoothest brews with antioxidant benefits.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Instant Lemon Ginger",
          "type": "Herbal",
          "description": "The robust, spicy flavors elevated with the bright sweetness of lemons in this instant tea.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Peach Paradise Green Tea",
          "type": "Green",
          "description": "Indulge your taste buds with this green tea blend with delicate, tart, and fruity notes. Peach Paradise is made of green tea, dried peach, apple, marigold, and hibiscus.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Monkey's Pick Oolong Tea",
          "type": "Oolong",
          "description": "Folklore tells of a man discovering a tea bush hanging off the side of a cliff. Unable to reach it, he trained a monkey to pick the leaves for him. While this practice isn't in use today, the name certainly has stuck. Monkey's Pick Oolong boasts earthy, unique aromas that are unveiled with each successive steeping as the leaves unfurl.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Peach Orchard Fruit Blend",
          "type": "Fruit Blend",
          "description": "A fruit blend reminiscent of summertime with peach and citrus notes. It's caffeine-free, high in vitamin C, and excellent as a sweetened iced tea. Peach Orchard is made from hibiscus, dried peach, apple, orange peel, and marigold.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Lemon Black Tea",
          "type": "Black",
          "description": "Lemon Black is a unique blend of black teas and sun-dried lemon bits. It brews a refreshing and tart cup of flavored tea, and is phenomenal hot or cold.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "China Rose",
          "type": "Herbal",
          "description": "These aromatic rosebuds are hand-picked and carefully dried to retain its shape. It brews a delicate floral cup of tea. Try blending with other teas to add a rosy flavor!",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Yerba Mate",
          "type": "Herbal",
          "description": "Yerba Mate is an incredible herb made from the leaves of a rainforest holly tree native to South America. It contains less caffeine than coffee, but more than black tea - making it a popular drink for those looking to reduce their caffeine consumption. Prepare Yerba Mate using a tea infuser or french press for an instant pick-me-up!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Tranquil-Tea Blend",
          "type": "Herbal",
          "description": "A calming twist on traditional Chamomile to help calm your senses. A blend of chamomile, lavender, and mint is powerful yet soothing and helps you get the rest you deserve. Enjoy the blend with a touch of honey or lemon to help rev up your sleeping capabilities.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Osmanthus Flower",
          "type": "Herbal",
          "description": "Osmanthus bloom throughout most of the year and are native to the warm temperatures of Asia. Known for its unforgettable sweet fragrance, they are used in many culinary delights, but can also be enjoyed as a tea. When brewed, the result is a refreshing floral and fragrant drink with hints of pineapple and apricot flavors.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Liquorice Slices",
          "type": "Herbal",
          "description": "Liquorice grows wild in Europe and Asia and is surprisingly related to the bean and pea plant. Praised in traditional Chinese medicine to help relieve the chest of phlegm and excessive coughing, Liquorice is also used to flavor food, candy and sodas. Medicinally, itâ€™s taken for its anti-inflammatory, antibiotic and anti-allergenic effects.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Chrysanthemum",
          "type": "Herbal",
          "description": "Chrysanthemum flowers have a stronger taste while the buds brew delicate and light. Chrysanthemum means â€œGolden Flowerâ€ in Greek. It has been traditionally used in Chinese medicine since the 15th century to help cool and detoxify the body.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Stevia",
          "type": "Herbal",
          "description": "Also known as Sweetleaf or Sugarleaf, Stevia is part of the sunflower family and is native to Southern and Central America. Recently gaining popularity as an all-natural sugar substitute, Stevia leaves contain up to thirty-five times the sweetness of ordinary table sugar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Sliced Astragalus Root",
          "type": "Herbal",
          "description": "Also known as Huang Qi or milk vetch, Astragalus has been used in traditional Chinese medicine for centuries. It is known to boost the bodyâ€™s immune system with antioxidant effects that inhibit free radical production. It is also used to treat various other conditions, including heart disease.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Saigon Symphony Tea Blend",
          "type": "Herbal",
          "description": "Enjoy the flavors of Thai tea without the caffeine. Named after an old, but still oft used, name of the largest city in Vietnam. A Blend of Rooibos, Barley, and Vietnamese Cinnamon (also known as Saigon Cinnamon).",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Rose Hip",
          "type": "Herbal",
          "description": "Also known as rose haw or rose hep, Rose Hip is the fruit of the rose plant and can be found just below the rose petal. Known for its extremely high Vitamin C content, they are believed to deliver powerful defense against a cold while also aiding as a mild diuretic to help flush your body from toxins.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Rooibos",
          "type": "Herbal",
          "description": "Originating from South Africa, this tea made from the powerful Red Bush plant takes great strides to help you relax and heal. Rooibos is caffeine-free, rich in antioxidants, and believed to restore liver malfunction and treat respiratory conditions. Studies are beginning to show preliminary positive results that Rooibos may improve immunity defects.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Roasted Barley (Mugicha)",
          "type": "Herbal",
          "description": "A popular beverage enjoyed in Japan and Korea for both its health benefits and taste. Enjoy Mugicha iced or cold, any time of the day, itâ€™s especially consumed after meals to help cleanse the blood and aid digestion. Some say this tea smells and tastes similar to coffee! Roasted Barley is known to contain iron, B2 and B1 for energy.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Tien Chi Flower",
          "type": "Herbal",
          "description": "Tien Chi Flowers have a distinctive look and taste. Its appearance is a small greenish bud that looks like miniature dried broccoli flowers due to the extracting of the flower petals. These flowers are highly prized throughout Asia for its traditional use of pain relieving and healing properties, as well as aiding in retaining fluid levels.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Mulberry Leaf",
          "type": "Herbal",
          "description": "Mulberry Leaf is made of pan-dried leaves from berry-producing Mulberry plants. Mulberry has been used in traditional Chinese medicine to remove excessive heat and toxins that build up in the body. Mulberry can make a wonderful supplement for those with diabetes by absorbing sugar to balance blood-sugar levels.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Mint",
          "type": "Herbal",
          "description": "Mint oil and leaves have been used since the Ancient Egyptians for medicinal purposes. Our Mint is naturally dried and grown on our tea estates in Zhejiang, China. From cuisines and cleansers to medicine and oils, Mint is one versatile herb! Get creative and add a few Mint leaves to your tea for an uplifting change. ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "American Ginseng",
          "type": "Herbal",
          "description": "Ginseng is a fleshy root from the plant species Panax, which means â€œall healâ€ in Greek. The name itself is translated from the Chinese characters meaning â€œman root,â€ and it has long been used in traditional Chinese medicine. It has been known to be an adaptogen â€“ not only helping the body deal with stress, but also cooling it and boosting immunity.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Pot Marigold",
          "type": "Herbal",
          "description": "Pot Marigold, or Calendula, is a species of plant from the Daisy family that blooms throughout the summer and fall seasons. Its name comes from its Old Saxon name, which translates to â€œit turns with the sun.â€ Marigolds are considered an edible flower, often being incorporated into salads to add color. Additionally, they have been known to have antiviral and anti-inflammatory properties, and are traditionally used for cramps and constipation.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Longan",
          "type": "Herbal",
          "description": "Meaning â€œdragon eyeâ€ in Chinese, Longan is a native fruit to Southern China thatâ€™s similar to lychee. It is often used in Chinese cuisine and desserts. As an herbal medicine, Longan is high in iron making it an excellent supplement those who need it, especially women. Try eating it like raisins or brew with goji berries for a delicious health drink.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Lemongrass",
          "type": "Herbal",
          "description": "Native to India and Asia, Lemon Grass is a tropical plant widely used throughout Asia in cuisines from soups to curries and brewed as a tea. With a mild citrus flavor and aroma, it also contains citral â€“ an essential oil that is also known to be boast antimicrobial and antiviral properties.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Lemon Verbena",
          "type": "Herbal",
          "description": "Originally from South America, Lemon Verbena is an herb with a power lemon scent. It was introduced to Europe in the 17th century where it was used in cuisines as well as herbal drinks and teas in place of actual lemons. It is also known to aid in digestion and have mild calming effects.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Lemon Balm",
          "type": "Herbal",
          "description": "Native to southern Europe and the Mediterranean, Lemon Balm is part of the mint family and is often used to flavor ice cream, herbal teas, and candies. It is known for its cooling and calming abilities and is thought to have antimicrobial and antiviral properties due to naturally occurring eugenol and tannins.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {

          "name": "Lavender",
          "type": "Herbal",
          "description": "Lavender has long been used for its soothing effects. Drinking a cup before sleeping can help promote a restful night. Lavender is highly aromatic with a light, sweet taste. Add some to your bath can infuse your skin with softening oils or try blending it with mint and other teas for a fragrant treat.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Jiao Gu Lan (Gynostemma)",
          "type": "Herbal",
          "description": "Jiao Gu Lan is also known as 'Poor Manâ€™s Ginseng' or 'Miracle Grass.'  This herbaceous vine is indigenous to southern China, Korea, and Japan. A sister to Ginseng, this powerful herb is best known to have high antioxidants and adaptogenic effects that promote longevity. Jiao Gu Lan has been known to improve memory and prevent hair loss.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Instant Natural Ginger",
          "type": "Herbal",
          "description": "Sweetened with honey and cane sugar, dissolves in hot or cold water for instant tea. Fueled with the spicy aroma of ginger to help warm your body and balance out a cold. Ginger is a common herb used to promote circulation and increase energy.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Honeysuckle",
          "type": "Herbal",
          "description": "Honeysuckle means â€œGold Silver Flowerâ€ in Chinese. One of the oldest medicinal herbs in history, it is traditionally used to clear heat and toxins from the body when sick. Honeysuckle is thought to be a natural antibiotic and cold remedy. Try Honeysuckle the next time you feel ill.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Dried Roselle Flower (Hibiscus)",
          "type": "Herbal",
          "description": "Hibiscus - or Roselle Flower - is a dark red flower rich in Vitamin C and anthocyanin, which has been known to help protect against cancer and may improve heart health and brain function. With mild diuretic properties, this tea is known to aid in maintaining regular body temperatures. Fruity and tart, Roselle is delicious over ice.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Hawthorn Berry (Shan Zha)",
          "type": "Herbal",
          "description": "These berries are traditionally brewed to improve blood flow to benefit your heart and digestion. Itâ€™s a wonderful traditional remedy to increase the appetite of stubborn children or from being ill. Add a few berries to accent black teas, creating a unique tartness. Full of antioxidants to protect from free radicals.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Goji Berry",
          "type": "Herbal",
          "description": "Tiny, yet powerful, Goji has been used in Chinese medicine for centuries. Recently named one of the top Superfruits, these berries are high in antioxidants that may promote healthy vision and immune support. Goji also makes a delicious snack. Substitute for raisins in trail mix or add a tablespoon to smoothies.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "European Rose",
          "type": "Herbal",
          "description": "Brew roses into an herbal remedy, create a softening facial mask or toss a few around your home for a natural air freshener. Our roses are hand-picked from Bulgaria and delicately dried to preserve the whole flower. This tea is traditionally brewed to remove toxins by stimulating blood flow directly under the skin.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Dried Ginger Slices",
          "type": "Herbal",
          "description": "Commonly used in cold remedies, Ginger is known to boost the immune system, soothe and treat flu symptoms as well as naturally increasing the bodyâ€™s energy levels.  It's also believed to aid in circulation, nausea, warm the body, and stimulate digestion.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Double Ginger Instant Tea",
          "type": "Herbal",
          "description": "Ginger Tea with dried ginger bits for even more ginger power. This root is known as a heating herb to warm the body, promote digestion and aid blood circulation. Sweetened with a touch of honey, just add water to enjoy this tea hot or cold.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Dried Dandelion",
          "type": "Herbal",
          "description": "More than just a flowering plant on your lawn, Dandelion is a traditional herb famous for its detoxifying abilities. Dandelion means 'Lion's Tooth,' in French, referring to the flower's coarsely tooth leaves. Dandelion may help the body increase urine and decrease swelling. May accelerate recovery and prevent bacterial growth.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Chrysanthemum Flower Bud",
          "type": "Herbal",
          "description": "Chrysanthemum Flower Bud is harvested before the flower fully blooms and then naturally dried to preserve the delicate flavors and aroma. Traditionally used in Asia for centuries to promote longevity and health, chrysanthemum has been known to cool and detoxify the body and is often consumed for better vision.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Chamomile Flower",
          "type": "Herbal",
          "description": "Chamomile has been used medicinally for ages. Ancient Egyptians praised Chamomile to ward off fevers. This herb is brewed in many cultures for stomach ailments and as a mild sedative. The leaves, flower buds and stems of Chamomile can be enjoyed as a relaxing tea. Add honey or lemon for a calming twist.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Balsam Pear",
          "type": "Herbal",
          "description": "Balsam Pear or â€œbitter melon,â€ is an edible fruit grown in Asia, Africa and the Caribbean. It has been traditionally used as a home remedy for various illnesses. The Filipino government promotes Balsam Pear to help cure diabetes. This wrinkly looking cucumber is often consumed when feeling sick to help release heat from the body.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Ashitaba",
          "type": "Herbal",
          "description": "With more antioxidants than Green Tea, Ashitaba is a powerful herb once you master the taste. Ashitaba means â€œTomorrow's Leafâ€ in Japanese since the leaves grow quickly and are consumed for regenerative properties and is believed to hinder wrinkles and signs of old age. An excellent supplement for vegetarians for the high B-12 content.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Taiwan High Mountain Oolong Tea",
          "type": "Oolong",
          "description": "One of the finest oolong teas in the world, this tea is semi-fermented with all the benefits of green tea without the grassy taste nor tannins present in black tea. The brief fermentation process creates a distinguished fragrance and its unique flavor. Cultivation and appreciation of this tea is similar to fine wine - each plantation and mountain produces its own special characteristics.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Zhejiang Tikuanyin Oolong Tea",
          "type": "Oolong",
          "description": "Tikuanyin, also known as Iron Buddha or Iron Goddess of Mercy, is considered a green oolong tea â€“ a variation from the oolong tea family. This tea is made when the oolong processing is done in a shorter period of time. The result is a brew thatâ€™s more like a green tea in color with vegetal tones, but a mix of nutty fragrances that are present in most oolongs.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Ginseng Oolong Tea",
          "type": "Oolong",
          "description": "Ginseng Oolong is for those who want to sustain energy levels. This tea is made of select oolong leaves and ginseng root extract. Ginseng is known as the â€œroot of mankind,â€ and is considered an adaptogen - a substance that can help your body deal with stress and find balance in terms of weight and body temperature.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Fresh Fragrance Oolong Tea",
          "type": "Oolong",
          "description": "Fresh Fragrance gets its name because thatâ€™s exactly what it produces when brewed - a delightful fresh fragrance! Best enjoyed during and after a meal, Oolong tea is highly prized for its belief to speed up your metabolism and to aid in digestion.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Big Red Robe Oolong Tea",
          "type": "Oolong",
          "description": "Big Red Robe's story tells the tale of an emperor searching high and low to cure his ailing mother. He found it in the form of tea from several tea shrubs on the Wuyi Mountains and covered them with large red robes, or Da Hong Pao. Today, those shrubs are still there, but availability is limited making it a tea not to be missed!",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Taiwan Lu Gu Oolong Tea",
          "type": "Oolong",
          "description": "The Lu Gu township in Taiwan has everything you need to produce top quality tea - spring water, a cool, misty climate and fertile land. Harvested in spring, the tea is processed into tightly rolled leaves and tested by the Farmers Association of Taiwan to set the prices based on taste and quality.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Phoenix Yellow Stone Oolong Tea",
          "type": "Oolong",
          "description": "Phoenix Yellow Stone is cultivated from tea trees in Guangdong that are over 700 years old. These trees are actually quite tiny in size and have been around since the Song Dynasty. It is said this tea was once reserved only for royalty. Today, Phoenix Yellow Stone is still considered a rare and precious tea due to its limited production.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "High Mountain Decaf Oolong Tea",
          "type": "Oolong",
          "description": "High Mountain Oolong Tea is synonymous with the finest Oolong teas in the world. Semi-fermented tea that contains all the benefits of green tea, but without the grassy taste or the tannins present in black tea. The very brief fermentation process also creates the subtle fragrances and flavors that distinguish this tea from all other varieties. The cultivation and appreciation of High Mountain Oolong is somewhat similar to fine wine, with each plantation and each mountain producing its own unique bouquet of flavors, and each year's harvest yielding its own special character. This tea is decaffeinated by exposing moistened tea leaves to pressurized carbon dioxide, which acts as a solvent to remove the caffeine. Because nothing else is affected during this process, the tea retains its flavors and beneficial antioxidants.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Dong Ting Oolong Tea",
          "type": "Oolong",
          "description": "Dong Ting Oolong is considered to be one of Taiwanâ€™s most famous and finest teas. Harvested on Dong Ting Mountain, it is believed the plants were brought over from the Wuyi Mountains in China. This exquisite tea will give you an amazing floral tone with smooth, sweet, dry flavors that are unique to the region.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "A-Li Shan Special Grade Oolong Tea",
          "type": "Oolong",
          "description": "Grown on A-Li Shan Mountain, one of the most famous oolong growing areas in Taiwan, A-Li Shan Oolong Tea is made from hand-picked tea that boast two or three leaves per stem from the top of the tea bush. These leaves are then hand-processed and rolled, resulting in its round, slightly crumpled look that unfurls when brewed, imparting a fragrant aroma and distinct creamy and nutty tones.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Phoenix White Leaf Oolong Tea",
          "type": "Oolong",
          "description": "The Phoenix Mountains in China have been growing tea trees for hundreds of years. This is where our White Leaf Oolong is grown and carries a characteristic white fuzz on the leaves. Harvested from ancient, un-pruned tea trees, Phoenix White Leaf is subtly sweet like lychee fruit and typically enjoyed during a meal to encourage digestion.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Osmanthus Milk Oolong Tea",
          "type": "Oolong",
          "description": "From the high misty mountains in Taiwan comes a naturally rich and milky flavored tea. Just smell the tea leaves and youâ€™ll know what weâ€™re talking about! Surprisingly, no actual milk is used - the flavor is purely natural from climate conditions the tea tress grow in. All we did was infuse this tea with the unforgettable sweet fragrance of Osmanthus flowers for a delightful cup of tea.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Oriental Beauty Oolong Tea",
          "type": "Oolong",
          "description": "Oriental Beauty is grown in the Hsinchu County in Taiwan without any pesticides to encourage grasshoppers to feed on the plants. The grasshopper extracts juices from tea stems and leaves, causing oxidation. This natural process yields tea with slightly sweet flavors. Stories say Queen Elizabeth II compared this tea to a beautiful lady.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Milk Oolong Tea",
          "type": "Oolong",
          "description": "Deliciously creamy and buttery flavors makes this oolong a unique and popular choice to enjoy. Grown at the top of the high, misty mountains in Taiwan, Milk Oolong is a twist on the usual. Its creamy note is all natural and you can enjoy multiple steeping as well.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Chamomile Oolong Tea",
          "type": "Oolong",
          "description": "A zen sip for restless nights, this new blend combines the buttery-nutmeg notes of Taiwanese Oolong tea with the delicate, soothing floral of Chamomile. Chamomile is brewed in many cultures for stomach ailments.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Lychee Oolong Tea",
          "type": "Oolong",
          "description": "Select fine oolong tea leaves infused with pure lychee fruit extraction. Lychee is naturally warming to the body according to Traditional Chinese Medicine, is particularly high in antioxidants, and is known to increase endurance during exercise. Combined with oolong tea, this blend is perfect for those who need a pick me up.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "A-Li Shan Oolong Tea",
          "type": "Oolong",
          "description": "Grown on A-Li Shan Mountain - one of the most famous oolong growing regions in Taiwan - this tea is picked from the top of the tea bush, boasting two or three leaves per stem. The leaves are then hand-processed and rolled, resulting in its rounded crumpled look that unfurls when brewed, imparting a fragrant aroma and creamy, nutty tones.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Queen of Pearl Jasmine Green Tea",
          "type": "Green",
          "description": "Made from tender silvery green tea buds infused with jasmine flowers, these pearls are meant for brewing! The blending process takes three rounds with a fresh batch of flowers each time. The leaves are then tightly rolled into a lovely pearl shape which slowly unfurls in hot water. A traditional Chinese tea perfect for gift giving. ",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Jasmine Pekoe Green Tea",
          "type": "Green",
          "description": "Jasmine Pekoe is made from whole, young tea leaves that are covered with silver peach-like fuzz. The harvested leaves are dried with heat to halt the oxidation process, and then tossed with jasmine flowers to capture aroma. Jasmine was once traded along the silk route and is the national flower of Indonesia, Pakistan and the Philippines. ",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Spring Snail Green Tea",
          "type": "Green",
          "description": "Spring comes early in Yunnan! A mild sunny winter, quickly gives way to spring which allows for this fresh and nutty green tea. It is composed entirely of buds and leaves picked in early March. The tea is expertly processed in small batches to ensure a nutty thick fresh green tea taste!",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Jasmine Quya Green Tea",
          "type": "Green",
          "description": "This fine Jasmine Quya is made from select tea leaves tossed and blended up to five times with the aroma of jasmine flowers. The night-blooming flowers are hand-picked in the morning and then kept in a cool dry place until the sun sets. When night falls, the jasmine bloom and are mixed with the tea so that the jasmine fragrance is absorbed.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Royal 1&One Green Tea",
          "type": "Green",
          "description": "A traditional Chinese health tea made from leaves of the Wax Tree, Royal 1&One is also known as Slimming, Kuding or Bitter Nail Tea. Naturally lower in caffeine, this tea is prized for the belief that it may help promote weight loss and detoxify the body. Brew only a 1 or 2 sticks to enjoy a full-bodied brew that may be steeped multiple times.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Taiping Monkey's Pick Green Tea",
          "type": "Green",
          "description": "Folklore has it that trained monkeys would pick tea leaves from hard to reach trees hanging off cliffs. A winner at the Panama Pacific Exposition in 1915, Taiping Monkey's Pick is characterized by its long, flat leaves with a waffle-like pattern from drying on linen or bamboo mats. Itâ€™s also considered one of the top ten teas in China.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Silky Green Tea",
          "type": "Green",
          "description": "Silky Green must be grown in high misty mountains to create that natural creamy flavor. Re-brew the tea leaves to enjoy a second steep that is just as good, if not better than the first.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Osmanthus Green Tea",
          "type": "Green",
          "description": "Osmanthus Green Tea is made from select tea leaves sprinkled with Osmanthus Flowers for a fresh apricot taste. Osmanthus has been traditionally used in Chinese medicine to expel toxins and enhance digestion. These tiny yellow flowers are as beautiful as they are delicious.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic San Bei Xiang Green Tea",
          "type": "Green",
          "description": "The aptly named San Bei Xiang - or â€œthree fragrant cupsâ€ in Chinese - has an ability to be steeped at least three times, revealing different flavor nuances with each brew. Nice and full-bodied, this makes a great everyday green tea.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic Dragon's Well Green Tea",
          "type": "Green",
          "description": "Teas named after stories are worth a try! According to Chinese legend, a dragon who lived in a well near West Lake saved the village from a drought by bringing rain. Today, Dragon's Well remains a specialty of the Zhejiang region. The tea has a unique appearance of smooth, flat green leaves with pointed ends like a sparrow's tongue.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic Cloud & Fog Green Tea",
          "type": "Green",
          "description": "Legend goes that monks planted tea trees on Lu Shan mountain, where Could & Fog is still presently grown. Named after the weather conditions on Lu Shan mountain, this tea is harvested during the Qing Ming Festival in spring. The best leaves are light jade in color and known to boast a healthy amount of tea alkaloid and Vitamin C.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Jasmine Flower Green Tea",
          "type": "Green",
          "description": "Jasmine green tea is one of the most iconic green teas enjoyed around the world. Blended and infused with real jasmine flowers, this tea boasts a wonderfully strong aromatic brew. Great iced or hot, let this tea whisk you away any time of day.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Gunpowder Green Tea",
          "type": "Green",
          "description": "Gunpowder is a popular green tea named after its resemblance of gunpowder pellets. The leaves are withered, steamed, rolled, then left to dry. Rolling the leaves protects them from physical damage while retaining flavor and aroma. Try this tea with mint and sugar for a refreshing tea",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Caramel Ruby Green Tea Blend",
          "type": "Green",
          "description": "Caramel Ruby is a harmonious blend of Rooibos and Caramel Houjicha. Rich with antioxidants, Rooibos relaxes the body, while Caramel Houjicha is a roasted green tea infused with caramel that aids in promoting digestion. Naturally sweet on its own, Caramel Ruby also pairs well with milk and sugar.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Silver Dragon White Tea",
          "type": "White",
          "description": "The twisted tea leaves with tiny hairs resemble the skin of a dragon, a mystic Chinese creature of power and wisdom. Made from tea buds harvested in spring, these delicate leaves brew light and are capable of handling multiple steeps. Enjoy the nuances of each steep as the flavors change to reveal delicious transitions.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Palm Silver Monkey White Tea",
          "type": "White",
          "description": "Palm Silver Monkey White Tea is a unique and rare white tea grown in Zhejiang, China. Only picked and harvested twice a year, this tea is rare and special. The harvested young buds in early spring are covered in silvery white hairs and processed entirely by hand to ensure quality control for delicious and clean tea.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Royal Floral Pekoe White Tea",
          "type": "White",
          "description": "Pekoe is a fine tea that is characterized with plump, waxy pale leaves with a fuzzy coat and buds. Usually made into orange pekoe black tea, it produces a delicate forest-like scent when formed into a white tea. Full of antioxidants from lack of processing.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Precious Rare White Tea",
          "type": "White",
          "description": "Precious Rare White Tea is produced in Anji County of Zhejiang Province in China, a region that is recognized for producing some of the best white teas in the world. This tea is highly prized due to its short harvesting period and very limited availability. It produces a smooth brew with scents of roasted chestnuts.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic Peony White Tea",
          "type": "White",
          "description": "White Peony, also known as Bai Mu Dan, is a delicate white tea that's minimally processed, lightly oxidized and full of antioxidants.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic Pekoe White Tea",
          "type": "White",
          "description": "Cultivated 60 years after Silver Needle White Tea, Pekoe White is made from whole tea leaves that may lack tips. Pekoe means 'white down,' which describes the fine velvety white fuzz on the light green tea leaves. The leaves are loosely rolled then naturally withered and dried in the sun. Minimal processing leads to maximum antioxidants.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "High Grade China White Tea",
          "type": "White",
          "description": "High Grade China White is cultivated from large tea trees called Dai Bai, or â€œBig White,â€ that have been around since the late 1800s. Enjoy multiple steepings to unravel all its earthy and creamy flavors. As with most white teas, High Grade China White is minimally processed, full of antioxidants, and low in caffeine.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Floral Awakening White Tea Blend",
          "type": "White",
          "description": "Stimulate your palate with this unforgettable flowery blend. Floral Awakening is a blend of Organic Peony Shou Mei White Tea, European Rose, and Osmanthus. Created to awaken the senses and stimulate the mind with each refreshing light sip. Fueled with antioxidants from white tea, the roses aid in detoxing your body.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Vanilla Sencha Green Tea",
          "type": "Green",
          "description": "Vanilla Sencha is a delectable brew that delivers the relaxing scent and warm flavors of all-natural vanilla, intertwined with the herbaceous flavors of sencha. Sencha is a delicate green tea from Japan that is shaded a couple weeks before picking to maximize the nutrients.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Matcha Tea",
          "type": "Green",
          "description": "Traditionally in Japan, Matcha is ceremonially whisked into a frothy brew and enjoyed with wagashi. The health benefits are magnified with Matcha as the stone-ground Sencha allows for consumption of the whole tea leaf. Using a bamboo whisk and bowl, Matcha becomes a thick green brew that is typically enjoyed in a matcha bowl.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Gyokuro Tama No Shizuku Green Tea",
          "type": "Green",
          "description": "Gyokuro means 'Jade Dew' and is one of Japan's finest teas. It was first discovered in 1835 by Kahei Yamamoto who shaded the leaves from sunlight for three weeks prior to harvesting. The result was an increase in the amount of caffeine and amino acids, as well as a sweeter brew.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Powdered Vanilla Green Tea",
          "type": "Green",
          "description": "A delightful blend of powdered green tea, sugar, and all-natural vanilla, Powdered Vanilla Green Tea is reminiscent of freshly baked sugar cookies without all the mess and with more antioxidants. Made out of matcha, caster sugar, and natural vanilla flavor.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Peach Sencha Green Tea",
          "type": "Green",
          "description": "Peach Sencha imparts the smooth and lightly herbaceous flavors of sencha with all natural succulent peach tones. Sencha is a delicate green tea from Japan that is shaded a couple weeks before picking to maximize the nutrients within the tea leaves.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic Artisan Shizuoka Sencha Green Tea",
          "type": "Green",
          "description": "Organically grown in the tea fields of Shizuoka, Japan, this Sencha is carefully processed and prepared to produce a very high quality tea that is greener in color, richer in flavor, and sweeter in taste even with multiple infusions.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "NOP Organic Matcha w/ Powdered Brown Rice",
          "type": "Green",
          "description": "Matcha with Powdered Brown Rice is a unique tea in that it blends organic matcha with the warm and soothing flavors of powdered toasted brown rice. Produced with National Organic Program (NOP) standards, this tea is certified to be 100% pure and natural and is sure to please your palate.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "NOP Organic Genmaicha Green Tea",
          "type": "Green",
          "description": "Brown Rice Tea, or Genmaicha, is a blend of sencha green tea and roasted brown rice. Once only consumed by the lower class as a way to stretch their supply of tea, Genmaicha is now appreciated and enjoyed by all due to its unique, soothing, and toasty flavor. Certified under the Nation Organic Program (NOP), this genmaicha is made of organic sencha and organic brown rice tea.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Japanese Matcha Shihou",
          "type": "Green",
          "description": "Made from stone-ground select Sencha shaded two weeks prior to harvest, Matcha Shihou boasts the full benefits of green tea since you consume the entire leaf. It is a higher grade of matcha compared to our Premium version with more nuanced flavors. Matcha is traditionally used in Japanese tea ceremonies, but you can also use it in recipes or add milk and sugar for a nice latte.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Matcha Genmaicha Green Tea",
          "type": "Green",
          "description": "A warm blend of sencha and toasted brown rice, dusted with matcha, Matcha Genmaicha boasts a beautiful green brew with a full-bodied toasty flavor. Your body slowly digests matcha for an energizing pick-me-up without the caffeine crash.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Low Caffeine Sencha Green Tea",
          "type": "Green",
          "description": "With an enticingly smooth and crisp flavor, Low Caffeine Sencha is a special brew that undergoes a unique processing method where the leaves are quickly saturated with high-heated water, then air-dried. This removes much of the caffeine ordinarily found in Sencha, but keeps its flavor intact.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Kukicha Green Tea",
          "type": "Green",
          "description": "Also known as Twig Tea or Bocha, Kukicha is made out of stems, stalks, and twigs left over from the production of Sencha or Matcha. It is processed as a green tea and imparts a unique flavor and aroma compared to other teas from including parts of the plant that most other teas do not have. Naturally low in caffeine, Kukicha is often steeped for three or four infusions.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Kagoshima Sencha Green Tea",
          "type": "Green",
          "description": "Most popular tea in Japan, Sencha tea is freshly picked leaves that are steamed before drying, rather than withered first like Chinese teas. The leaves are then heated to remove excess moisture and rolled into a needle shape. A blend of the Yabukita and Yutakamori tea variety, this batch comes from Kagoshima, Japan where the tea bushes are covered with a screen to increase chlorophyll production for a more balanced flavor.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Kagoshima Houjicha Green Tea",
          "type": "Green",
          "description": "Houjicha is made by baking or oven roasting harvested Sencha. The result is a darker, more roasted brew. Baking tea lowers the caffeine and tannin content and makes Houjicha comparable to decaffeinated teas. It is said to have some relaxing effects on the body and is traditionally enjoyed during meals or before bed. This batch comes from Kagoshima, Japan.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Kagoshima Genmaicha Green Tea",
          "type": "Green",
          "description": "Genmaicha is a blend of Japanese green tea and roasted brown rice. Sometimes referred to as 'Popcorn tea' due to a few grains of rice popping during the roasting process, this tea used to be consumed by the lower class as a way to stretch their tea supply. Coming from Kirishima District in Kagoshima, Japan, this batch of Genmaicha is specifically made using quality select needle-shaped leaves.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Houjicha Green Tea",
          "type": "Green",
          "description": "Houjicha is made by baking or oven roasting harvested Sencha, resulting in a darker, roasted brew. Baking tea lowers the caffeine and tannin content and makes Houjicha comparable to decaffeinated teas. It is said to have some relaxing effects on the body and is traditionally enjoyed during meals or before bed.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Honeydew Sencha Green Tea",
          "type": "Green",
          "description": "Honeydew Sencha brews fresh and fruity with all-natural accents of honeydew melon. Sencha is a delicate green tea from Japan that is shaded a couple weeks before picking to maximize the nutrients.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Genmaicha Green Tea",
          "type": "Green",
          "description": "Genmaicha is a Japanese blend of Sencha and roasted brown rice. Sometimes called 'Popcorn Tea' due to the rice popping during the roasting process, this tea used to be consumed by the lower class as a way to stretch their supply of tea. Genmaicha is now appreciated by all for its unique toasty flavor.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Caramel Houjicha Green Tea",
          "type": "Green",
          "description": "A blend of toasted Houjicha infused with all natural caramel. Made by roasting Sencha, Houjicha's brown leaves brew a darker hue with less caffeine content than other green teas. Add a little milk and sugar for a delightful cup of tea any time of the day. Perfect with a piece of chocolate.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Yunnan Pu-Erh",
          "type": "Pu-erh",
          "description": "Yunnan Pu-Erh is a fermented black tea from Yunnan, China. It's a fully oxidized, full-bodied tea typically enjoyed after a meal.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Pu-Erh",
          "type": "Pu-erh",
          "description": "Pu-Erh is a post-fermented tea that goes through a complex processing where it is shaped into cakes and aged for a few years to mature its flavors. This process creates a unique aroma and flavor along with added health benefits. Pu-Erh is believed to aid in reducing cholesterol and fat and is best enjoyed after a meal to aid in digestion.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Rose Pu-Erh",
          "type": "Pu-erh",
          "description": "Pressed into beautiful mini bricks and infused with rose for an extra health boost, Rose Pu-Erh is a post-fermented tea that goes through a complex processing where it is shaped into cakes and aged for a few years to mature its flavors. Drop a brick into a cup of freshly boiled water and enjoy the calming, yet energizing brew.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Premium Special Grade Pu-Erh",
          "type": "Pu-erh",
          "description": "Named after the famous Yunnan Province in China, Pu-Erh is a highly prized tea for both taste and health benefits. Aged up to 7 years underground, Pu-Erh is believed to help reduce fat and decrease cholesterol levels. Enjoy a cup of Pu-Erh about an hour after a meal to aid in digestion. Premium Special Grade Pu-Erh has a smoother and sweeter taste than lower grade Pu-Erh.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Chrysanthemum Pu-Erh",
          "type": "Pu-erh",
          "description": "Give these small bricks a try! Pu-Erh is a post-fermented tea that goes through a complex processing where it is shaped into cakes and aged for a few years to mature its flavors. Infused with chrysanthemum flowers for added detox benefits and a floral scent, these bricks are small yet powerful. Drop a brick into a cup of freshly boiled water for a healthy brew.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Gongfu Black Tea",
          "type": "Black",
          "description": "Gongfu is a term used to describe the Chao Zhou and Min Nan way of preparing tea in a skill, ceremonial manner. Instead of focusing on symbolic hand gestures like that of Japanese tea ceremonies, Gongfu focuses on accomplishing a delightful taste of tea to satisfy the soul. This tea is characterized by fine, unbroken, and twisted leaves perfect for brewing the Gongfu way.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Lychee Black Tea",
          "type": "Black",
          "description": "Lychee is a tropical fruit that is medicinally enjoyed in Asia for its warming effects on the body and antioxidant content. Try this tea with a little milk and sugar for a treat!",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Keemun Black Tea",
          "type": "Black",
          "description": "Keemun is one of the most popular and well-known black teas from China. Legend has it that a man named Yu Quianchen was the first to make this tea in order to meet demands for a breakfast tea blend produced in Europe. Today, Keemun is enjoyed as a well-rounded tea that is widely used as a base for black tea and breakfast blends.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Indian Peach Black Tea",
          "type": "Black",
          "description": "A perfectly peachy tea that will delight your taste buds! Robust black tea is infused with real peach flavors for a delicious cup of tea that's great over ice and a little sugar or honey. Peaches have been symbolic of long life and unity in China. This tea is a CTC, which stands for 'Crush, Tear, Curl.'",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic Supreme Red Peony Black Tea",
          "type": "Black",
          "description": "Unlike other black teas, Organic Red Peony is made only from young tea buds that are carefully hand-tied into a floret. The tea itself is processed like any black tea, however when you brew it, itâ€™ll bloom into a floating peony. This unique tea can last up to a few steeps, if not more.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Organic Royal Lapsang Souchong Black Tea",
          "type": "Black",
          "description": "Legend has it that Lapsang Souchong was created during the Qing Dynasty when the passaged of armies delayed the annual drying of tea leaves in the Wuyi Mountains. In order to speed up the drying process, workers dried the leaves over fires made from local pine tress and thus a new tea was born. The finished result is a unique smoky flavor and aroma.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Masala Chai Orthodox Black Tea",
          "type": "Black",
          "description": "Chai is a popular tea from India made from a blend of strong black teas and warm, aromatic Indian spices and herbs, including cardamom, cinnamon, ginger, cloves, and pepper. The name literally means â€œmixed-spice teaâ€ in Hindi and is commonly enjoyed with milk and sugar, but is also great by itself. Only the top quality tea leaves, herbs, and spices go into this blend which results in a delicate, smooth and flavorful brew.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Masala Chai CTC Black Tea",
          "type": "Black",
          "description": "Chai is a popular tea from India made from a blend of strong black teas and warm, aromatic Indian spices and herbs, including cardamom, cinnamon, ginger, cloves, and pepper. The name literally means â€œmixed-spice teaâ€ in Hindi and is commonly enjoyed with milk and sugar, but is also great by itself. CTC stands for crush, tear, curl.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Lavender Black Tea",
          "type": "Black",
          "description": "Fine, select black tea leaves sprinkled with lavender flowers, this tea is sure to make you calm, yet alert. Lavender is known to ease anxiety and contain beneficial oils to improve brain function and memory. Combined with mental alertness from the black tea, this simple blend may be enjoyed as is or with a hint of milk and sugar.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Jiu Qu Hong Mei Black Tea",
          "type": "Black",
          "description": "Named after its unique red brew, this tea is characterized by long, brittle, twisted leaves that resemble fish hooks. Jiu Qu Hong Mei is famous for its rarity and has been prized since around 1850. It finally gained noticed worldwide in 1995, when this tea was mentioned in Wang Zufeng's popular novel, A Magnificent Tree of the South.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Indian Ginger Black Tea",
          "type": "Black",
          "description": "Indian Ginger Tea is made with a light black tea and pieces of natural sun-dried ginger that give it a nice kick of spiciness. While ginger is known to awake senses and soothe the nerves, it is also commonly used in cold remedies and as an aid for nausea and other stomach ailments.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Indian Cinnamon Black Tea",
          "type": "Black",
          "description": "Real cinnamon bark is infused in powerful black tea for a satisfying brew with benefits. Cinnamon is known to boast antibacterial properties and regulate blood sugar levels. It may also ease pain from arthritis and cramps. Try this tea with milk and sugar for a treat.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Tropical Bliss Fruit Blend",
          "type": "Fruit Blend",
          "description": "The deep russet brew and tangy notes come from Hibiscus, neatly blended with coconut and papaya fruit bits. Coconut is known to improve insulin levels, which can help curb sugar cravings. It may also increase your metabolic rate, providing energy and fueling fat burners. Tropical Bliss is made from hibiscus, rose hips, apple bits, citrus peels, pineapple bits, papaya bits and mango bits.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Summertime Bliss Fruit Blend",
          "type": "Fruit Blend",
          "description": "Relive summer anytime with our Summertime Bliss. Blended with a base of Hibiscus and Rose Hips for immunity support with added fruit benefits from grapes, oranges and pears. Pears are known to have a cooling effect, creating an excellent remedy for those who have a fever. With its high folic acid content, this teaâ€™s also safe for pregnant women. Summertime Bliss is made from hibiscus, rose hips, apple bits, citrus peels, grapes bits, and pineapple bits.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Pineapple Dreams Fruit Blend",
          "type": "Fruit Blend",
          "description": "Take a trip to the Tropics with our caffeine free Pineapple Dreams thatâ€™s bursting with tart, fruity flavors. Pineapples are known to prevent macular degeneration - the primary cause of vision loss in adults. Since pineapples are known to be anti-inflammatory, this tea may do well as a supplement for those who suffer from arthritis. Pineapple Dreams is made from hibiscus, rose hips, apple bits, citrus peels, and pineapple bits.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Parisian Romance Fruit Blend",
          "type": "Fruit Blend",
          "description": "Hoping to fall in love? Look no further. Our Parisian Romance is a beautiful blend of enchanting cherry, grape and strawberry, created to mimic a perfect Parisian night. With a base of Hibiscus and Rose Hips, this herbal fruit tea makes a great health boost that can be enjoyed whenever you feel like adding love to your life. Parisian Romance is made from hibiscus, rose hips, apple bits, citrus peels, grapes, pineapple bits, and mint.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Black Forest Fruit Blend",
          "type": "Fruit Blend",
          "description": "A refreshing and minty blend of cherries and strawberries, fueled with Vitamin C and antioxidants. Made from all natural fruit bits and flowers, steep this tea as long as possible for a full bodied brew. Black Forest is made from hibiscus, rose hips, apple bits, black currants, grapes, and mint.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Apple Verbena Fruit Blend",
          "type": "Fruit Blend",
          "description": "Apple Verbena is a harmonious blend of botanical Hibiscus and Rose Hips, decorated with flower petals, apple bits and spices. The all natural fruit bits add complex flavors and nutritional benefits of Vitamin C to help boost immunity. Naturally caffeine free. Fun fact: Did you know apples are part of the Rose family? Apple Verbena is made from hibiscus, rose hips, and apple bits.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "English Breakfast Black Tea",
          "type": "Black",
          "description": "How can this tea be called English Breakfast if it isn't from England? We can thank Richard Davis, who created this tea in 1843 by blending select Indian teas based on a marketing idea which has since become popular worldwide. Typically enjoyed with a little milk and sugar, this tea makes for a perfect start to a beautiful day.",
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          "name": "Earl Grey Black Tea",
          "type": "Black",
          "description": "Earl Grey is a select blend of black teas infused with the distinctive aroma of bergamot, a citrus fruit. Legend has it that the name comes from a British Prime Minister named Earl Charles Grey, who made the tea readily available to the public. Bergamot oil is traditionally used to ease digestion and anxiety, reduce fevers, and combat stress.",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          "name": "Assam Black Tea",
          "type": "Black",
          "description": "Assam Black Tea is harvested from the Assam variant of Camellia sinensis and is grown at or near sea level in India and Southern China; both locations offer the ideal climate for tea growing.  It is known for its full body, briskness, and strong yet smooth taste. Used in many breakfast tea blends, Assam goes well with milk and sugar.",
          createdAt: new Date(),
          updatedAt: new Date()

        }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};