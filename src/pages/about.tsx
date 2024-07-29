import { useState, useEffect } from 'react';
import NavMenu from "../components/navmenu"

// import font
import "../assets/fonts/fonts.css";
import "../assets/fonts/Lato/Lato-Regular.ttf"
import "../assets/fonts/Lato/Lato-Black.ttf"
import "../assets/fonts/Open_Sans/static/OpenSans-Regular.ttf"

// test


const About = () => {
 
    //fungsi efek navbar
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    
    return (
        <body style={{ fontFamily: 'OpenSansRegular, sans-serif' }} className="h-auto min-h-screen w-screen relative bg-gradient-to-bl from-[#ED1C24] from-10% to-[#871015] overflow-x-hidden select-none">
            
            
            {/* Navbar */}
            <header className={`fixed z-50 inset-0 w-screen h-[10%] transition-all duration-300 ${scrolled ? 'backdrop-blur-3xl' : ''}`}>
                            
                <div className="relative flex items-center justify-between h-full p-4 dp:px-0 lp:px-0 tb:px-0 mb:px-8">
                    <NavMenu />
                </div>

            </header>


            {/* Main */}
            <main>

                {/* Section 1 */}
                <section className='w-full h-full bg-left-top bg-no-repeat bg-cover
                                        dp:px-14 lp:px-14 tb:px-14 mb:px-6 |
                                        dp:pt-[50vh] lp:pt-[50vh] tb:pt-[55vh] mb:pt-[40vh] |
                                        dp:pb-[45vh] lp:pb-[45vh] tb:pb-[15vh] mb:pb-[5vh]' 
                                        style={{ backgroundImage: `url("/mcb-bg.png")` }}>

                        <h1 className="w-[20%] ml-[5%] text-white font-bold text-4xl text-left">
                                MENGAPA MINECRAFTER BERSATU?
                            </h1>

                </section>


                {/* Section 2 */}
                <section className='w-full h-full mt-14 dp:px-14 lp:px-14 tb:px-14 mb:px-6'>

                    <div className='dp:flex lp:flex tb:block mb:block mx-auto gap-14 items-start
                                    dp:w-auto lp:w-auto tb:w-[80%] mb:w-auto
                                    dp:justify-between lp:justify-between tb:justify-center mb:justify-center'>

                        <p className="text-white text-sm font-normal text-justify my-0
                                        dp:w-[50%] lp:w-[50%] tb:w-auto mb:w-auto">
                            Setiap tanggal 17 Agustus, Indonesia merayakan hari kemerdekaannya, ini
                            adalah momen penting yang diperingati dengan kebanggaan dan semangat
                            patriotisme di seluruh negeri.
                            <br></br><br></br>
                            Dalam rangka untuk memperingati hari bersejarah ini, Minecrafter Bersatu
                            dipelopori sebagai cara untuk merayakan, sekaligus mempromosikan persatuan
                            dan kesatuan di antara berbagai komunitas Minecraft yang ada di Indonesia.
                            <br></br><br></br>
                            Minecrafter bersatu diinisiasikan oleh komunitas MinecraftID dan Minecraft
                            Sejati, dan diikutsertakan berbagai komunitas Minecraft dari seluruh Indonesia.
                            Acara ini bertujuan untuk menciptakan kesempatan bagi para pemain untuk
                            berinteraksi, berkolaborasi, berkompetisi, dan saling mengenal satu sama lain.
                        </p>

                        <p className="text-white text-sm font-normal text-justify my-0
                                        dp:w-[50%] lp:w-[50%] tb:w-auto mb:w-auto">
                            Minecrafter Bersatu adalah acara perayaan yang istimewa untuk merayakan
                            hari kemerdekaan Indonesia, dirancang khusus untuk komunitas Minecraft di tanah
                            air. Acara ini terdiri dari cabang perlombaan minigames dan perlombaan karya.
                            <br></br><br></br>
                            Salah satu highlight acara adalah kompetisi yang berbentuk tim, dimana
                            peserta diajak untuk membentuk rasa gotong royong dan juga kerjasama agar
                            dapat mencapai kemenangan. Acara ini dilaksanakan secara online/dalam jaringan
                            (daring), melalui platform video game Minecraft dan platform komunikasi Discord.
                        </p>
                        
                    </div>

                    <div className='py-14'>

                        <h3 className='text-white text-4xl font-bold ml-[5%]'>Tujuan</h3>
                        <p className="text-white text-sm font-normal my-8
                                        dp:w-[50%] lp:w-[50%] tb:w-auto mb:w-auto">
                            1. Acara ini bertujuan untuk merayakan Hari Kemerdekaan Indonesia dengan
                            cara yang unik dan kreatif, melibatkan komunitas Minecraft dalam sebuah
                            perayaan yang menghormati sejarah dan persatuan nasional.
                            <br></br><br></br>
                            2.Acara ini dimaksudkan untuk menyatukan berbagai komunitas Minecraft
                            yang ada di Indonesia, dari berbagai daerah dan latar belakang, dengan
                            tujuan membangun solidaritas dan persatuan di antara para pemain.
                            <br></br><br></br>
                            3.Acara ini diharapkan dapat menginspirasi para pemain untuk berkolaborasi,
                            bertukar ide, dan mengekspresikan kemampuan mereka dalam lingkungan
                            yang positif dan mendukung.
                            <br></br><br></br>
                            4.Dengan menyelenggarakan acara seperti Minecraft Bersatu, diharapkan akan
                            tercipta sebuah komunitas yang lebih kuat dan berkelanjutan di dalam dunia
                            Minecraft, di mana nilai-nilai persahabatan, kerjasama, dan rasa bangga akan
                            terus ditanamkan dan dirayakan.
                        </p>

                    </div>
                                            
                </section>





            </main>


            {/* Footer */}
            <footer className='flex items-center w-full h-full py-20 mx-auto mt-14 dp:flex-row lp:flex-row tb:flex-col mb:flex-col dp:justify-between lp:justify-between tb:justify-center mb:justify-center dp:px-24 lp:px-24 tb:px-24 mb:px-6'>
                    
                    <div className='flex text-white gap-x-8 uk-link-reset dp:order-2 lp:order-2 tb:order-none mb:order-none dp:py-0 lp:py-0 tb:py-8 mb:py-8 dp:mx-0 lp:mx-0 tb:mx-auto mb:mx-auto'>

                        <a href="https://www.instagram.com/mcbersatu/" uk-icon="icon: instagram; ratio: 1.5"></a>
                        <a href="https://www.tiktok.com/@mcbersatuid" uk-icon="icon: tiktok; ratio: 1.5"></a>
                        <a href="https://www.x.com/mcbersatu/" uk-icon="icon: x; ratio: 1.5"></a>

                    </div>

                    <p style={{ fontFamily: 'LatoRegular, sans-serif' }} className="text-xs text-center text-white font-extralight">Proudly presented by &copy; Minecrafter Bersatu.</p>

            </footer>


        </body>
    );
}

export default About