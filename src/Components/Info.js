import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/components/Info.css";
import "react-show-more-button/dist/module";
import ShowMore from "react-show-more-button";

export default function Info() {
  return (
    <Container className="info-container">
      <Row>
        <Col className="info-img-col">
          <img
            src="https://cdn.itemsatis.com/uploads/admin/FONcnLeKAak1u3x2i4HTzbqwv.png"
            className="info-container-img"
          />
        </Col>
      </Row>
      <ShowMore
        maxHeight={300}
        className="show-more"
        classNameButton="show-more-button"
        styleButton={{
          background: "red",
        }}
        style={{
          color: "white",
          background: "black",
        }}
      >
        Türkiye'nin En Büyük İtem, Hesap, Skin, Epin Satış Sitesi | İtemsatış
        İtemSatış Türkiye'deki bilgisayar, konsol ve mobil oyuncularına en
        kaliteli hizmeti verebilmek adına kurulmuştur. Genç, dinamik ve sektörü
        çok yakından tanıyan ekibimiz sayesinde oyuncuların ihtiyacını hızlı
        şekilde anlıyor ve buna göre güncellemeler yapıyoruz. İtemsatış'ın
        hedefi Türk oyuncu topluluğuna her zaman uygun fiyatlar ve
        komisyonlarla, sektöre hak ettiği kaliteli ve profesyonel bir hizmet
        sunmaktır. Sitemizde ödeme işlemlerinde 3D Secure güvenlik kontrolü
        uygulanmaktadır ve kredi kartı, havale, EFT, mobil ödeme, ininal kart,
        papara ile ödeme alabilmekteyiz. Bu sayede siz değerli oyuncular,
        güvenli alışveriş yapmanın keyfini çıkarırsınız. Kurumsal bir şirket
        olarak hizmet verdiğimiz için sitedeki tüm işlemleri faturalandırmakla
        yükümlüyüz, faturalarınız her ayın ilk 10 günü içerisinde epostanıza
        E-Fatura formatında gönderilmektedir. İtemSatış Türkiye'nin En Büyük
        Oyuncu Pazar Yeri ve EPİN Satış Sitesi olma yolunda daima sizlerin görüş
        ve geri bildirimleri ile gelişmeye devam edecek. İtemsatış'a Neden Üye
        Olmalıyım? Avantajları Nedir? İlan & Oyuncu Pazarı İtemSatış.com
        Oluşturduğu ilan & oyuncu pazarında üyelerimizin dilediği oyunu veya
        oyun hesabını hızlı ve güvenli şekilde satmasını veya satın almasını
        sağlıyoruz. İster mobil oyun, ister masaüstü oyun hesabınızı
        itemsatış.com güvencesiyle satabilirsiniz. Siteye üye olmak ve ilan
        oluşturmak tamamen ücretsizdir. Yüzlerce kategori arasından hangisinde
        satış yapmak istediğinizi seçin ve hemen ilanınızı oluşturun. Dilerseniz
        ilanınıza Vitrin İlan ya da Öne Çıkarılan İlan dopingi
        uygulayabilirsiniz. Bu dopingler sayesinde ilanınız çok daha hızlı
        satılacaktır. Oyun satışı yapabileceğiniz bazı popüler kategoriler
        aşağıda listelenmiştir, linklerine tıklayarak o kategoriye
        gidebilirsiniz. LoL Hesap Satışı League of Legends kısaca LoL hesabınızı
        itemsatış.com güvencesiyle satışa sunabilir ve para kazanabilirsiniz.
        Eğer alıcıysanız güvenli ticaret sistemimiz sayesinde LoL hesabı satın
        alabilirsiniz. LoL bol kostümlü ve dilediğiniz ligde hesap satın almak
        için aşağıdaki linkten LoL hesaplarının bulunduğu kategoriye
        gidebilirsiniz. League of Legends İlan pazarı
        itemsatis.com/ilanlar/lol-hesap-satisi.html VALORANT Hesap Satışı Riot
        Games'in son dönemin en çok ses getiren oyunu olan VALORANT FPS türünde
        bir oyundur. Sitemizde düşük komisyonlarla VALORANT hesap satışı
        yapabilirsiniz. Eğer kendinize yeni bir VALORANT hesap satın almak
        istiyorsanız da doğru adrestesiniz. VALORANT İlan pazarı
        itemsatis.com/ilanlar/valorant-hesap-satisi.html CS:GO Hesap & Skin
        Satışı CS:GO skinlerinizi ve hesaplarınızı itemsatış.com güvencesiyle
        satabilirsiniz. Skin ve Hesap satışlarında düşük komisyon oranları
        sayesinde kazançlı çıkan siz olun! CSGO İlan pazarı
        itemsatis.com/ilanlar/csgo-hesap-satisi.html Steam Hesap Satışı Steam
        Hesap Satışı kategorisinde artık kullanmak istemediğiniz hesaplarınızı
        satıp nakit paraya çevirebilirsiniz. Eğer alıcıysanız yüzlerce ilan
        arasından dilediğiniz oyunlara sahip Steam Hesap satın alabilirsiniz.
        Steam İlan pazarı itemsatis.com/ilanlar/steam-hesap-satisi.html Discord
        Nitro, Boost, Sunucu Satışı İtemsatış.com Türkiye'nin en aktif Discord
        hizmetleri satış sitesidir. Eğer satıcıysanız Discord Nitro, Boost ve
        Sunucu satışı işlemlerinizi hızlıca gerçekleştirebilir ve para
        kazanabilirsiniz. Alıcılar ise güvenli ticaret ve havuz sistemi
        sayesinde dolandırılma riskinden uzak alışveriş yapabilmektedir. Discord
        İlan pazarı itemsatis.com/ilanlar/discord.html Zula Hesap Satışı Yerli
        yapım olan Zula oyununda hesap satışı yapabilmeniz mümkün. Sitemizde
        ilan oluşturduktan sonra Zula hesabınızı satabilirsiniz. Zula İlan
        pazarı itemsatis.com/ilanlar/zula-hesap-satisi.html PUBG Mobile Hesap
        Satışı Son yılların en çok oynanan mobil oyunu olan PUBG Mobile ilan
        pazarı çok aktif durumdadır. PUBG Mobile hesap satışı yaparak gerçek
        para kazanabilirsiniz. Ayrıca onlarca ilan arasından beğendiğiniz PUBG
        Mobile hesap satın alabilirsiniz. Tüm işlemler güvenli ticaret
        sistemimiz ile desteklenmektedir, bu sayede aklınızda sorular olmadan
        alışverişin keyfini çıkarırsınız. PUBG Mobile İlan pazarı
        itemsatis.com/ilanlar/pubg-mobile-hesap-satisi.html Fortnite Hesap
        Satışı Epic Games'in en popüler oyunu Fortnite hesaplarınızı sitemizde
        satışa çıkarabilirsiniz. Fortnite hesap satışı kategorisinde ister
        hesabınızı satın, isterseniz kendinize yeni bir Fortnite hesap satın
        alın. Yapacağınız işlemler itemsatış.com güvencesiyle gerçekleşecektir.
        Fortnite İlan pazarı itemsatis.com/ilanlar/fortnite.html Origin Hesap
        Satışı FIFA, Battlefield, Assasin's Creed, The Sims, Star Wars, Need For
        Speed ve yüzlerce oyuna para harcayabilecek durumunuz yoksa çözüm
        itemsatış.com da. Origin Hesap Satışı kategorisinde dilediğiniz oyuna
        ucuz fiyatlarla sahip olabilirsiniz. Uygun fiyatla Origin hesap satın
        alın ve oyunları ucuza elde etmiş olun. Origin İlan pazarı
        itemsatis.com/ilanlar/origin.html Uplay Hesap Satışı Ubisoft'un oyun
        platformu olan UPLAY içerisinde Rainbow Six Siege, Watch Dogs, Far Cry,
        Assassin's Creed ve daha nice oyunları barındırmaktadır. Oyunların satış
        fiyatı yüksek olduğundan dolayı bütçeniz buna yetmiyorsa UPLAY hesap
        satışı kategorisinden bu oyunlara sahip olan bir hesap satın
        alabilirsiniz. UPLAY hesabı satın alıp dilediğiniz oyuna ucuz fiyatlarla
        erişmenin tadını çıkarın. Uplay İlan pazarı
        itemsatis.com/ilanlar/uplay.html Wolfteam Hesap Satışı İtemsatış
        Güvencesiyle Wolfteam Hesap Satın Alabilir veya Wolfteam Hesap Satışı
        Yapabilirsiniz. Wolfteam İlan pazarı
        itemsatis.com/ilanlar/wolfteam-hesap-satisi.html Black Desert Online BDO
        Hesap Satışı İtemsatış.com güvencesiyle BDO hesap satışı yapabilir veya
        BDO hesabı satın alabilirsiniz. BDO İlan pazarı
        itemsatis.com/ilanlar/black-desert-online-turkiye.html Clash of Clans
        Hesap Satışı İtemsatış güvenli ticaret sistemiyle Clash of Clans hesap
        satışı yapabilir ya da COC hesap satın alabilirsiniz. Clash of Clans
        İlan pazarı itemsatis.com/ilanlar/coc-hesap-satisi.html Roblox Hesap
        Satışı Sitemizde Roblox hesap satışı yapabilir ya da kendinize yeni bir
        Roblox hesap satın alabilirsiniz. Roblox İlan pazarı
        itemsatis.com/ilanlar/roblox-hesap-satisi.html Knight Online GB, İtem,
        Ring Satışı Knight Online Ring, İtem ve GB satışlarınız için
        itemsatış.com güvenli ticaret sistemini kullanabilirsiniz. Düşük
        komisyonlarımız sayesinde daha fazla para kazanarak kâra geçin! Knight
        Online İlan pazarı itemsatis.com/kategoriler/87/knight-online.html Clash
        Royale Hesap Satışı Clash Royale Hesap Satışı yapın ve gerçek paraya
        dönüştürün! Ya da kendinize yeni bir Clash Royale hesabı satın alın.
        Clash Royale İlan pazarı itemsatis.com/ilanlar/clash-royale-hesap.html
        LoL Unranked Hesap Satışı Yeni bir sayfa mı açmak istiyorsunuz? Hemen
        itemsatış.com dan LoL Unranked Smurf hesap satın alın ve ligleri birer
        birer tırmanmaya başlayın! Unranked hesap satın al
        itemsatis.com/urunler/lol-unranked-hesap.html Epic Games Hesap Satışı
        Steam benzeri bir oyun platformu olan Epic Games düzenli olarak bedava
        oyun dağıtmasıyla ünlü olan bir şirket. Eğer bu bedava oyun fırsatlarını
        kaçırdıysanız sitemizde uygun fiyatlı satılan Epic Games hesaplarını
        satın alabilirsiniz. Epic Games İlan pazarı
        itemsatis.com/ilanlar/epic-games-hesap.html İnstagram Hesap Satışı Yeni
        bir İnstagram sayfasına mı ihtiyacınız var? İtemsatış.com İnstagram
        hesap satışı kategorisinden kendinize dilediğiniz büyüklükte bir hesap
        satın alın. Havuz sistemi sayesinde güvenli ticaretin tadını çıkarın.
        İnstagram İlan pazarı itemsatis.com/ilanlar/instagram.html Wild Rift
        Hesap Satışı Riot Games'in yeni projesi olan Wild Rift, League of
        Legends'in mobil versiyonudur. Aynı şampiyonlar, aynı haritaların boyutu
        küçüldü ve mobil oyuncuların beğenisine sunuldu. İtemsatış.com oyuncu
        pazarında Wild Rift hesap satışı yapabilirsiniz. Veya kendinize yeni bir
        Wild Rift hesap satın almak istiyorsanız güvenli ticaret sistemimiz
        sayesinde alışveriş yapabilirsiniz. Wild Rift ilan pazarını inceleyin ve
        kendinize en uygun bol şampiyonlu bol kostümlü hesabı satın alın. Wild
        Rift İlan pazarı itemsatis.com/ilanlar/wild-rift-hesap-satisi.html
        Growtopia Hesap Satışı Growtopia Diamond Lock, World Lock ve Growtopia
        hesap satışı için doğru adres itemsatış. Hemen ilan oluşturun ve oyuncu
        pazarında satış yapın. Eğer alıcıysanız kendinize Growtopia hesap veya
        Diamond Lock satın alın. Growtopia İlan pazarı
        itemsatis.com/ilanlar/growtopia-dl-hesap-satisi.html Brawl Stars Hesap
        Satışı Yeni bir Brawl Stars hesabı mı arıyorsunuz? Hemen itemsatış.com
        Brawl Stars hesap satışı ilan pazarına gidin ve beğendiğiniz Brawl Stars
        hesap satın alın. Eğer satıcıysanız ilan oluşturarak hemen satışa
        başlayabilirsiniz. Brawl Stars İlan pazarı
        itemsatis.com/ilanlar/brawl-stars-hesap.html Garena Free Fire Hesap
        Satışı Yeni çıkan PUBG Mobile benzeri hayatta kalma oyunu olan Free Fire
        hesap satışı işlemlerinizi itemsatış.com güvencesiyle
        gerçekleştirebilirsiniz. İster ilan oluşturup satış yapın, isterseniz
        kendinize yeni bir Free Fire hesabı satın alın. Free Fire İlan pazarı
        itemsatis.com/ilanlar/free-fire-hesap.html Mobile Legends Hesap Satışı
        Yeni bir Mobile Legends hesabı mı satın almak istiyorsunuz? Hemen Mobile
        Legends ilan pazarına gidin ve bir hesap beğenin. Satıcıysanız hemen
        Mobile Legends hesap satışı kategorisine yeni bir ilan ekleyin ve satış
        yaptıktan sonra gerçek para kazanın. Mobile Legends İlan pazarı
        itemsatis.com/ilanlar/mobile-legends-hesap.html Rise of Kingdoms Hesap
        Satışı Hemen Rise of Kingdom hesabınızı satılığa çıkarın ve nakit para
        kazanın. Eğer alıcıysanız ROK hesap satışı kategorisinden bir ilan
        beğenin ve hemen satın alın. İşlemleriniz itemsatış.com güvencesinde
        olacaktır ve size destek olacağız. Rise of Kingdoms İlan pazarı
        itemsatis.com/ilanlar/rise-hesap-satisi.html Oyuncu pazarında ilan
        satışı İtemsatış'a ücretsiz bir şekilde üye olduktan sonra hemen
        ilanınızı oluşturun, dilerseniz doping uygulayın. Müşteriniz ilanı satın
        aldığında bilgilendirme için telefon numaranıza ve eposta adresinize
        mesaj gönderiyoruz. Bu mesajın ardından hemen siteye bağlanarak
        ürününüzü teslim edin. Alıcının onayının hemen ardından bakiye
        üyeliğinize gelecek. Bu bakiyeyi kredi kartı, İNİNAL kart veya papara
        hesabınıza nakit olarak çekebilirsiniz. Oyuncu pazarında ilan satın
        almak İtemsatış'ta yüzlerce oyun kategorisinden beğendiğiniz ilanın
        satıcısına mesaj atın ve bilgi alın. Eğer oyunu veya hesabı
        beğendiyseniz üyeliğinize bakiye yükleyin. İlanı satın aldığınızda,
        satıcının belirttiği süre içerisinde teslimatı gerçekleştirmesini
        bekleyiniz. Oyunu veya hesabın bilgilerini tamamen üzerinize aldıktan
        sonra ürünü teslim aldığınızı onaylayın. Eğer satıcı belirttiği süre
        içerisinde teslim edemezse ücretiniz sürenin bitmesiyle birlikte
        bakiyenize otomatik olarak iade edilecektir. Sitemiz üzerinde
        yapacağınız bütün alışverişlerde güven köprüsü oluşturuyor ve sizi kötü
        niyetli satıcılardan koruyoruz. Düşük Komisyon Oranları Düşük komisyon
        oranımızla siz değerli oyunculara daha fazla para kazanma imkanı
        sunuyoruz, komisyon oranımız %7'dir. Canlı Destek Haftanın her günü saat
        12:00 ve 00:00 arası canlı desteğimiz hizmet vermektedir. Aklınızdaki
        her türlü soru için uzman canlı destek ekibimizden danışmanlık
        alabilirsiniz. Direkt olarak site yöneticileriyle iletişime geçmek
        istiyorsanız destek sisteminden talep oluşturabilirsiniz. CD-KEY ve EPİN
        kod satışı Yüzlerce oyunun CD-KEY ve EPİN kodlarını en uygun fiyatlardan
        sizlere ulaştırıyoruz. Her zaman ucuz ve indirimli EPİN satışı
        yapmaktayız. Aşağıdaki linklere tıklayarak ilgili oyunun EPİN kodlarını
        satın alabilirsiniz. İndirimli Ucuza League of Legends LoL RP satın al.
        %15 İndirimli ucuza VALORANT Points VP satın al. Steam Cüzdan Kodu satın
        al. %20 İndirimli PUBG Mobile UC satın al. Google Hediye Kartı satın al.
        App Store Hediye Kartı satın al. Ucuza indirimli Zula Altını ZA satın
        al. Gameforge EPİN hemen satın al. Metin2 Ejder Parası EP satın al.
        Razer Gold EPİN satın al. Steam Random Key satın al. Mobile Legends
        Elmas satın al. Wild Rift Wild Cores satın al. Free Fire Elmas satın al.
        Oyun Haberleri, Rehberleri ve İncelemeleri Oyun dünyasından en güncel
        haberlere, oynayış rehberlerine ve oyun incelemelerine sitemizin
        "Haberler" bölümünden erişebilirsiniz. Bilgisayar, mobil ve konsol
        oyunları hakkında en güncel içeriklere İtemsatış'ı takip ederek
        ulaşabilirsiniz. İletişim Bilgilerimiz destek@itemsatis.com.tr 0850 306
        1054 Haftanın her günü 12:00 - 00.00 arası canlı destek İtemsatış.com
        sosyal medya hesaplarını takibe aldınız mı? Aşağıdaki sosyal medya
        adreslerimizi takip ederek tüm güncellemeler, çekilişler ve duyurulardan
        haberdar olabilirsiniz. Bunun yanı sıra takibe alarak bize destek
        olabilirsiniz. İnstagram Hesabımız Facebook Sayfamız Youtube Kanalımız
        Twitter Profilimiz Pinterest Hesabımız
      </ShowMore>
    </Container>
  );
}
