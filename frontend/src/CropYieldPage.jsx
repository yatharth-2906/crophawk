import { useState } from "react";
import Cookies from "js-cookie";
import ShowRecc from "./ShowRecc";
import styles from "./Recommendations.module.css";
import { useContextUser } from "./CONTEXT_PROVIDERS/UserProvider";

function FertRecPage() {
    const token = Cookies.get('token');

    if (!token)
        window.location.replace('/login');

    const [getFert, setFert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = "https://crophawk-api.onrender.com/";

    const predict = async () => {
        // Collect and validate inputs
        const inputs = {
            state: parseInt(document.getElementById("state").value, 10),
            district: parseInt(document.getElementById("district").value, 10),
            crop_year: parseInt(document.getElementById("crop_year").value, 10),
            crop_type: parseInt(document.getElementById("crop_type").value, 10),
            season: parseInt(document.getElementById("season").value, 10),
            area: parseFloat(document.getElementById("area").value),
        };

        if (Object.entries(inputs).some(([key, value]) => {
            if (typeof value === "number") {
                return isNaN(value);
            }
            return false; // Ignore strings
        })) {
            alert("Please provide valid input values for the given parameters.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${API_URL}yield_prediction`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`API error: ${errorMessage}`);
            }

            const result = await response.json();
            console.log("Fertilizer Recommendation:", result.res);

            setFert(result.res || "No recommendation available"); // Handle unexpected response
        } catch (err) {
            console.error("Error during api call:", err);
            setError("Failed to fetch recommendation. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={styles.recc_body}>
                <div className={styles.recc_content}>
                    <br />
                    <center><h1>Yield Prediction</h1></center>
                    <br />

                    {/* Input fields */}
                    <div className={styles.input_container}>
                        <p className={styles.input_name}>State</p>
                        <select id="state" name="state" className={styles.input_value}>
                            <option value="0">Andaman and Nicobar Island</option>
                            <option value="1">Andhra Pradesh</option>
                            <option value="2">Arunachal Pradesh</option>
                            <option value="3">Assam</option>
                            <option value="4">Bihar</option>
                            <option value="5">CHANDIGARH</option>
                            <option value="6">Chhattisgarh</option>
                            <option value="7">Dadra and Nagar Haveli</option>
                            <option value="8">Daman and Diu</option>
                            <option value="9">Delhi</option>
                            <option value="10">Goa</option>
                            <option value="11">Gujarat</option>
                            <option value="12">Haryana</option>
                            <option value="13">Himachal Pradesh</option>
                            <option value="14">Jammu and Kashmir</option>
                            <option value="15">Jharkhand</option>
                            <option value="16">Karnataka</option>
                            <option value="17">Kerala</option>
                            <option value="18">Laddak</option>
                            <option value="19">Madhya Pradesh</option>
                            <option value="20">Maharashtra</option>
                            <option value="21">Manipur</option>
                            <option value="22">Meghalaya</option>
                            <option value="23">Mizoram</option>
                            <option value="24">Nagaland</option>
                            <option value="25">Odisha</option>
                            <option value="26">Puducherry</option>
                            <option value="27">Punjab</option>
                            <option value="28">Rajasthan</option>
                            <option value="29">Sikkim</option>
                            <option value="30">THE DADRA AND NAGAR HAVELI</option>
                            <option value="31">Tamil Nadu</option>
                            <option value="32">Telangana</option>
                            <option value="33">Tripura</option>
                            <option value="34">Uttar Pradesh</option>
                            <option value="35">Uttarakhand</option>
                            <option value="36">West Bengal</option>
                        </select>

                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>District</p>
                        <select id="district" name="district" className={styles.input_value}>
                            <option value="0">ADILABAD</option>
                            <option value="1">AGAR MALWA</option>
                            <option value="2">AGRA</option>
                            <option value="3">AHMADABAD</option>
                            <option value="4">AHMEDNAGAR</option>
                            <option value="5">AIZAWL</option>
                            <option value="6">AJMER</option>
                            <option value="7">AKOLA</option>
                            <option value="8">ALAPPUZHA</option>
                            <option value="9">ALIGARH</option>
                            <option value="10">ALIPURDUAR</option>
                            <option value="11">ALIRAJPUR</option>
                            <option value="12">ALLAHABAD</option>
                            <option value="13">ALMORA</option>
                            <option value="14">ALWAR</option>
                            <option value="15">AMBALA</option>
                            <option value="16">AMBEDKAR NAGAR</option>
                            <option value="17">AMETHI</option>
                            <option value="18">AMRAVATI</option>
                            <option value="19">AMRELI</option>
                            <option value="20">AMRITSAR</option>
                            <option value="21">AMROHA</option>
                            <option value="22">ANAND</option>
                            <option value="23">ANANTAPUR</option>
                            <option value="24">ANANTNAG</option>
                            <option value="25">ANJAW</option>
                            <option value="26">ANUGUL</option>
                            <option value="27">ANUPPUR</option>
                            <option value="28">ARARIA</option>
                            <option value="29">ARAVALLI</option>
                            <option value="30">ARIYALUR</option>
                            <option value="31">ARWAL</option>
                            <option value="32">ASHOKNAGAR</option>
                            <option value="33">AURAIYA</option>
                            <option value="34">AURANGABAD</option>
                            <option value="35">AZAMGARH</option>
                            <option value="36">BADGAM</option>
                            <option value="37">BAGALKOTE</option>
                            <option value="38">BAGESHWAR</option>
                            <option value="39">BAGHPAT</option>
                            <option value="40">BAHRAICH</option>
                            <option value="41">BAKSA</option>
                            <option value="42">BALAGHAT</option>
                            <option value="43">BALANGIR</option>
                            <option value="44">BALESHWAR</option>
                            <option value="45">BALLARI</option>
                            <option value="46">BALLIA</option>
                            <option value="47">BALOD</option>
                            <option value="48">BALODA BAZAR</option>
                            <option value="49">BALRAMPUR</option>
                            <option value="50">BANAS KANTHA</option>
                            <option value="51">BANDA</option>
                            <option value="52">BANDIPORA</option>
                            <option value="53">BANGALORE RURAL</option>
                            <option value="54">BANKA</option>
                            <option value="55">BANKURA</option>
                            <option value="56">BANSWARA</option>
                            <option value="57">BARABANKI</option>
                            <option value="58">BARAMULLA</option>
                            <option value="59">BARAN</option>
                            <option value="60">BAREILLY</option>
                            <option value="61">BARGARH</option>
                            <option value="62">BARMER</option>
                            <option value="63">BARNALA</option>
                            <option value="64">BARPETA</option>
                            <option value="65">BARWANI</option>
                            <option value="66">BASTAR</option>
                            <option value="67">BASTI</option>
                            <option value="68">BATHINDA</option>
                            <option value="69">BEED</option>
                            <option value="70">BEGUSARAI</option>
                            <option value="71">BELAGAVI</option>
                            <option value="72">BEMETARA</option>
                            <option value="73">BENGALURU URBAN</option>
                            <option value="74">BETUL</option>
                            <option value="75">BHADRADRI</option>
                            <option value="76">BHADRAK</option>
                            <option value="77">BHAGALPUR</option>
                            <option value="78">BHANDARA</option>
                            <option value="79">BHARATPUR</option>
                            <option value="80">BHARUCH</option>
                            <option value="81">BHAVNAGAR</option>
                            <option value="82">BHILWARA</option>
                            <option value="83">BHIND</option>
                            <option value="84">BHIWANI</option>
                            <option value="85">BHOJPUR</option>
                            <option value="86">BHOPAL</option>
                            <option value="87">BIDAR</option>
                            <option value="88">BIJAPUR</option>
                            <option value="89">BIJNOR</option>
                            <option value="90">BIKANER</option>
                            <option value="91">BILASPUR</option>
                            <option value="92">BIRBHUM</option>
                            <option value="93">BISHNUPUR</option>
                            <option value="94">BISWANATH</option>
                            <option value="95">BOKARO</option>
                            <option value="96">BONGAIGAON</option>
                            <option value="97">BOTAD</option>
                            <option value="98">BOUDH</option>
                            <option value="99">BUDAUN</option>
                            <option value="100">BULANDSHAHR</option>
                            <option value="101">BULDHANA</option>
                            <option value="102">BUNDI</option>
                            <option value="103">BURHANPUR</option>
                            <option value="104">BUXAR</option>
                            <option value="105">CACHAR</option>
                            <option value="106">CHAMARAJANAGARA</option>
                            <option value="107">CHAMBA</option>
                            <option value="108">CHAMOLI</option>
                            <option value="109">CHAMPAWAT</option>
                            <option value="110">CHAMPHAI</option>
                            <option value="111">CHANDAULI</option>
                            <option value="112">CHANDEL</option>
                            <option value="113">CHANDIGARH</option>
                            <option value="114">CHANDRAPUR</option>
                            <option value="115">CHANGLANG</option>
                            <option value="116">CHARAIDEO</option>
                            <option value="117">CHARKI DADRI</option>
                            <option value="118">CHATRA</option>
                            <option value="119">CHENGALPATTU</option>
                            <option value="120">CHENNAI</option>
                            <option value="121">CHHATARPUR</option>
                            <option value="122">CHHINDWARA</option>
                            <option value="123">CHHOTAUDEPUR</option>
                            <option value="124">CHIKKABALLAPURA</option>
                            <option value="125">CHIKKAMAGALURU</option>
                            <option value="126">CHIRANG</option>
                            <option value="127">CHITRADURGA</option>
                            <option value="128">CHITRAKOOT</option>
                            <option value="129">CHITTOOR</option>
                            <option value="130">CHITTORGARH</option>
                            <option value="131">CHURACHANDPUR</option>
                            <option value="132">CHURU</option>
                            <option value="133">COIMBATORE</option>
                            <option value="134">COOCHBEHAR</option>
                            <option value="135">CUDDALORE</option>
                            <option value="136">CUTTACK</option>
                            <option value="137">DADRA AND NAGAR HAVELI</option>
                            <option value="138">DAKSHINA KANNADA</option>
                            <option value="139">DAMAN</option>
                            <option value="140">DAMOH</option>
                            <option value="141">DANG</option>
                            <option value="142">DANTEWADA</option>
                            <option value="143">DARBHANGA</option>
                            <option value="144">DARJEELING</option>
                            <option value="145">DARRANG</option>
                            <option value="146">DATIA</option>
                            <option value="147">DAUSA</option>
                            <option value="148">DAVANGERE</option>
                            <option value="149">DEHRADUN</option>
                            <option value="150">DELHI TOTAL</option>
                            <option value="151">DEOGARH</option>
                            <option value="152">DEOGHAR</option>
                            <option value="153">DEORIA</option>
                            <option value="154">DEVBHUMI DWARKA</option>
                            <option value="155">DEWAS</option>
                            <option value="156">DHALAI</option>
                            <option value="157">DHAMTARI</option>
                            <option value="158">DHANBAD</option>
                            <option value="159">DHAR</option>
                            <option value="160">DHARMAPURI</option>
                            <option value="161">DHARWAD</option>
                            <option value="162">DHEMAJI</option>
                            <option value="163">DHENKANAL</option>
                            <option value="164">DHOLPUR</option>
                            <option value="165">DHUBRI</option>
                            <option value="166">DHULE</option>
                            <option value="167">DIBANG VALLEY</option>
                            <option value="168">DIBRUGARH</option>
                            <option value="169">DIMA HASAO</option>
                            <option value="170">DIMAPUR</option>
                            <option value="171">DINAJPUR DAKSHIN</option>
                            <option value="172">DINAJPUR UTTAR</option>
                            <option value="173">DINDIGUL</option>
                            <option value="174">DINDORI</option>
                            <option value="175">DIU</option>
                            <option value="176">DODA</option>
                            <option value="177">DOHAD</option>
                            <option value="178">DUMKA</option>
                            <option value="179">DUNGARPUR</option>
                            <option value="180">DURG</option>
                            <option value="181">EAST DISTRICT</option>
                            <option value="182">EAST GARO HILLS</option>
                            <option value="183">EAST GODAVARI</option>
                            <option value="184">EAST JAINTIA HILLS</option>
                            <option value="185">EAST KAMENG</option>
                            <option value="186">EAST KHASI HILLS</option>
                            <option value="187">EAST SIANG</option>
                            <option value="188">EAST SINGHBUM</option>
                            <option value="189">ERNAKULAM</option>
                            <option value="190">ERODE</option>
                            <option value="191">ETAH</option>
                            <option value="192">ETAWAH</option>
                            <option value="193">FAIZABAD</option>
                            <option value="194">FARIDABAD</option>
                            <option value="195">FARIDKOT</option>
                            <option value="196">FARRUKHABAD</option>
                            <option value="197">FATEHABAD</option>
                            <option value="198">FATEHGARH SAHIB</option>
                            <option value="199">FATEHPUR</option>
                            <option value="200">FAZILKA</option>
                            <option value="201">FIROZABAD</option>
                            <option value="202">FIROZEPUR</option>
                            <option value="203">GADAG</option>
                            <option value="204">GADCHIROLI</option>
                            <option value="205">GAJAPATI</option>
                            <option value="206">GANDERBAL</option>
                            <option value="207">GANDHINAGAR</option>
                            <option value="208">GANGA NAGAR</option>
                            <option value="209">GANJAM</option>
                            <option value="210">GARHWA</option>
                            <option value="211">GARIYABAND</option>
                            <option value="212">GAURELLA PENDRA MARWAHI</option>
                            <option value="213">GAUTAM BUDDHA NAGAR</option>
                            <option value="214">GAYA</option>
                            <option value="215">GHAZIABAD</option>
                            <option value="216">GHAZIPUR</option>
                            <option value="217">GIR SOMNATH</option>
                            <option value="218">GIRIDIH</option>
                            <option value="219">GOALPARA</option>
                            <option value="220">GODDA</option>
                            <option value="221">GOLAGHAT</option>
                            <option value="222">GOMATI</option>
                            <option value="223">GONDA</option>
                            <option value="224">GONDIA</option>
                            <option value="225">GOPALGANJ</option>
                            <option value="226">GORAKHPUR</option>
                            <option value="227">GUMLA</option>
                            <option value="228">GUNA</option>
                            <option value="229">GUNTUR</option>
                            <option value="230">GURDASPUR</option>
                            <option value="231">GURGAON</option>
                            <option value="232">GWALIOR</option>
                            <option value="233">HAILAKANDI</option>
                            <option value="234">HAMIRPUR</option>
                            <option value="235">HANUMAKONDA</option>
                            <option value="236">HANUMANGARH</option>
                            <option value="237">HAPUR</option>
                            <option value="238">HARDA</option>
                            <option value="239">HARDOI</option>
                            <option value="240">HARIDWAR</option>
                            <option value="241">HASSAN</option>
                            <option value="242">HATHRAS</option>
                            <option value="243">HAVERI</option>
                            <option value="244">HAZARIBAGH</option>
                            <option value="245">HINGOLI</option>
                            <option value="246">HISAR</option>
                            <option value="247">HOJAI</option>
                            <option value="248">HOOGHLY</option>
                            <option value="249">HOSHANGABAD</option>
                            <option value="250">HOSHIARPUR</option>
                            <option value="251">HOWRAH</option>
                            <option value="252">HYDERABAD</option>
                            <option value="253">IDUKKI</option>
                            <option value="254">IMPHAL EAST</option>
                            <option value="255">IMPHAL WEST</option>
                            <option value="256">INDORE</option>
                            <option value="257">JABALPUR</option>
                            <option value="258">JAGATSINGHAPUR</option>
                            <option value="259">JAGITIAL</option>
                            <option value="260">JAIPUR</option>
                            <option value="261">JAISALMER</option>
                            <option value="262">JAJAPUR</option>
                            <option value="263">JALANDHAR</option>
                            <option value="264">JALAUN</option>
                            <option value="265">JALGAON</option>
                            <option value="266">JALNA</option>
                            <option value="267">JALORE</option>
                            <option value="268">JALPAIGURI</option>
                            <option value="269">JAMMU</option>
                            <option value="270">JAMNAGAR</option>
                            <option value="271">JAMTARA</option>
                            <option value="272">JAMUI</option>
                            <option value="273">JANGOAN</option>
                            <option value="274">JANJGIR-CHAMPA</option>
                            <option value="275">JASHPUR</option>
                            <option value="276">JAUNPUR</option>
                            <option value="277">JAYASHANKAR</option>
                            <option value="278">JEHANABAD</option>
                            <option value="279">JHABUA</option>
                            <option value="280">JHAJJAR</option>
                            <option value="281">JHALAWAR</option>
                            <option value="282">JHANSI</option>
                            <option value="283">JHARGRAM</option>
                            <option value="284">JHARSUGUDA</option>
                            <option value="285">JHUNJHUNU</option>
                            <option value="286">JIND</option>
                            <option value="287">JODHPUR</option>
                            <option value="288">JOGULAMBA</option>
                            <option value="289">JORHAT</option>
                            <option value="290">JUNAGADH</option>
                            <option value="291">KABIRDHAM</option>
                            <option value="292">KACHCHH</option>
                            <option value="293">KADAPA</option>
                            <option value="294">KAIMUR (BHABUA)</option>
                            <option value="295">KAITHAL</option>
                            <option value="296">KALABURAGI</option>
                            <option value="297">KALAHANDI</option>
                            <option value="298">KALIMPONG</option>
                            <option value="299">KALLAKURICHI</option>
                            <option value="300">KAMAREDDY</option>
                            <option value="301">KAMLE</option>
                            <option value="302">KAMRUP</option>
                            <option value="303">KAMRUP METRO</option>
                            <option value="304">KANCHIPURAM</option>
                            <option value="305">KANDHAMAL</option>
                            <option value="306">KANGRA</option>
                            <option value="307">KANKER</option>
                            <option value="308">KANNAUJ</option>
                            <option value="309">KANNIYAKUMARI</option>
                            <option value="310">KANNUR</option>
                            <option value="311">KANPUR DEHAT</option>
                            <option value="312">KANPUR NAGAR</option>
                            <option value="313">KAPURTHALA</option>
                            <option value="314">KARAIKAL</option>
                            <option value="315">KARAULI</option>
                            <option value="316">KARBI ANGLONG</option>
                            <option value="317">KARGIL</option>
                            <option value="318">KARIMGANJ</option>
                            <option value="319">KARIMNAGAR</option>
                            <option value="320">KARNAL</option>
                            <option value="321">KARUR</option>
                            <option value="322">KASARAGOD</option>
                            <option value="323">KASGANJ</option>
                            <option value="324">KATHUA</option>
                            <option value="325">KATIHAR</option>
                            <option value="326">KATNI</option>
                            <option value="327">KAUSHAMBI</option>
                            <option value="328">KENDRAPARA</option>
                            <option value="329">KENDUJHAR</option>
                            <option value="330">KHAGARIA</option>
                            <option value="331">KHAMMAM</option>
                            <option value="332">KHANDWA</option>
                            <option value="333">KHARGONE</option>
                            <option value="334">KHEDA</option>
                            <option value="335">KHERI</option>
                            <option value="336">KHORDHA</option>
                            <option value="337">KHOWAI</option>
                            <option value="338">KHUNTI</option>
                            <option value="339">KINNAUR</option>
                            <option value="340">KIPHIRE</option>
                            <option value="341">KISHANGANJ</option>
                            <option value="342">KISHTWAR</option>
                            <option value="343">KODAGU</option>
                            <option value="344">KODERMA</option>
                            <option value="345">KOHIMA</option>
                            <option value="346">KOKRAJHAR</option>
                            <option value="347">KOLAR</option>
                            <option value="348">KOLASIB</option>
                            <option value="349">KOLHAPUR</option>
                            <option value="350">KOLLAM</option>
                            <option value="351">KOMARAM BHEEM ASIFABAD</option>
                            <option value="352">KONDAGAON</option>
                            <option value="353">KOPPAL</option>
                            <option value="354">KORAPUT</option>
                            <option value="355">KORBA</option>
                            <option value="356">KOREA</option>
                            <option value="357">KOTA</option>
                            <option value="358">KOTTAYAM</option>
                            <option value="359">KOZHIKODE</option>
                            <option value="360">KRA DAADI</option>
                            <option value="361">KRISHNA</option>
                            <option value="362">KRISHNAGIRI</option>
                            <option value="363">KULGAM</option>
                            <option value="364">KULLU</option>
                            <option value="365">KUPWARA</option>
                            <option value="366">KURNOOL</option>
                            <option value="367">KURUKSHETRA</option>
                            <option value="368">KURUNG KUMEY</option>
                            <option value="369">KUSHI NAGAR</option>
                            <option value="370">LAHUL AND SPITI</option>
                            <option value="371">LAKHIMPUR</option>
                            <option value="372">LAKHISARAI</option>
                            <option value="373">LALITPUR</option>
                            <option value="374">LATEHAR</option>
                            <option value="375">LATUR</option>
                            <option value="376">LAWNGTLAI</option>
                            <option value="377">LEH LADAKH</option>
                            <option value="378">LEPARADA</option>
                            <option value="379">LOHARDAGA</option>
                            <option value="380">LOHIT</option>
                            <option value="381">LONGDING</option>
                            <option value="382">LONGLENG</option>
                            <option value="383">LOWER DIBANG VALLEY</option>
                            <option value="384">LOWER SIANG</option>
                            <option value="385">LOWER SUBANSIRI</option>
                            <option value="386">LUCKNOW</option>
                            <option value="387">LUDHIANA</option>
                            <option value="388">LUNGLEI</option>
                            <option value="389">MADHEPURA</option>
                            <option value="390">MADHUBANI</option>
                            <option value="391">MADURAI</option>
                            <option value="392">MAHABUBABAD</option>
                            <option value="393">MAHARAJGANJ</option>
                            <option value="394">MAHASAMUND</option>
                            <option value="395">MAHBUBNAGAR</option>
                            <option value="396">MAHE</option>
                            <option value="397">MAHENDRAGARH</option>
                            <option value="398">MAHESANA</option>
                            <option value="399">MAHISAGAR</option>
                            <option value="400">MAHOBA</option>
                            <option value="401">MAINPURI</option>
                            <option value="402">MAJULI</option>
                            <option value="403">MALAPPURAM</option>
                            <option value="404">MALDAH</option>
                            <option value="405">MALKANGIRI</option>
                            <option value="406">MAMIT</option>
                            <option value="407">MANCHERIAL</option>
                            <option value="408">MANDI</option>
                            <option value="409">MANDLA</option>
                            <option value="410">MANDSAUR</option>
                            <option value="411">MANDYA</option>
                            <option value="412">MANSA</option>
                            <option value="413">MARIGAON</option>
                            <option value="414">MATHURA</option>
                            <option value="415">MAU</option>
                            <option value="416">MAYURBHANJ</option>
                            <option value="417">MEDAK</option>
                            <option value="418">MEDCHAL MALKAJGIRI</option>
                            <option value="419">MEDINIPUR EAST</option>
                            <option value="420">MEDINIPUR WEST</option>
                            <option value="421">MEERUT</option>
                            <option value="422">MEWAT</option>
                            <option value="423">MIRZAPUR</option>
                            <option value="424">MOGA</option>
                            <option value="425">MOKOKCHUNG</option>
                            <option value="426">MON</option>
                            <option value="427">MORADABAD</option>
                            <option value="428">MORBI</option>
                            <option value="429">MORENA</option>
                            <option value="430">MUKTSAR</option>
                            <option value="431">MULUGU</option>
                            <option value="432">MUMBAI</option>
                            <option value="433">MUMBAI SUBURBAN</option>
                            <option value="434">MUNGELI</option>
                            <option value="435">MUNGER</option>
                            <option value="436">MURSHIDABAD</option>
                            <option value="437">MUZAFFARNAGAR</option>
                            <option value="438">MUZAFFARPUR</option>
                            <option value="439">MYSURU</option>
                            <option value="440">NABARANGPUR</option>
                            <option value="441">NADIA</option>
                            <option value="442">NAGAON</option>
                            <option value="443">NAGAPATTINAM</option>
                            <option value="444">NAGARKURNOOL</option>
                            <option value="445">NAGAUR</option>
                            <option value="446">NAGPUR</option>
                            <option value="447">NAINITAL</option>
                            <option value="448">NALANDA</option>
                            <option value="449">NALBARI</option>
                            <option value="450">NALGONDA</option>
                            <option value="451">NAMAKKAL</option>
                            <option value="452">NAMSAI</option>
                            <option value="453">NANDED</option>
                            <option value="454">NANDURBAR</option>
                            <option value="455">NARAYANAPET</option>
                            <option value="456">NARAYANPUR</option>
                            <option value="457">NARMADA</option>
                            <option value="458">NARSINGHPUR</option>
                            <option value="459">NASHIK</option>
                            <option value="460">NAVSARI</option>
                            <option value="461">NAWADA</option>
                            <option value="462">NAYAGARH</option>
                            <option value="463">NEEMUCH</option>
                            <option value="464">NICOBARS</option>
                            <option value="465">NIRMAL</option>
                            <option value="466">NIWARI</option>
                            <option value="467">NIZAMABAD</option>
                            <option value="468">NORTH AND MIDDLE ANDAMAN</option>
                            <option value="469">NORTH DISTRICT</option>
                            <option value="470">NORTH GARO HILLS</option>
                            <option value="471">NORTH GOA</option>
                            <option value="472">NORTH TRIPURA</option>
                            <option value="473">NUAPADA</option>
                            <option value="474">OSMANABAD</option>
                            <option value="475">PAKKE KESSANG</option>
                            <option value="476">PAKUR</option>
                            <option value="477">PALAKKAD</option>
                            <option value="478">PALAMU</option>
                            <option value="479">PALGHAR</option>
                            <option value="480">PALI</option>
                            <option value="481">PALWAL</option>
                            <option value="482">PANCH MAHALS</option>
                            <option value="483">PANCHKULA</option>
                            <option value="484">PANIPAT</option>
                            <option value="485">PANNA</option>
                            <option value="486">PAPUM PARE</option>
                            <option value="487">PARAGANAS NORTH</option>
                            <option value="488">PARAGANAS SOUTH</option>
                            <option value="489">PARBHANI</option>
                            <option value="490">PASCHIM BARDHAMAN</option>
                            <option value="491">PASHCHIM CHAMPARAN</option>
                            <option value="492">PATAN</option>
                            <option value="493">PATHANAMTHITTA</option>
                            <option value="494">PATHANKOT</option>
                            <option value="495">PATIALA</option>
                            <option value="496">PATNA</option>
                            <option value="497">PAURI GARHWAL</option>
                            <option value="498">PEDDAPALLI</option>
                            <option value="499">PERAMBALUR</option>
                            <option value="500">PEREN</option>
                            <option value="501">PHEK</option>
                            <option value="502">PILIBHIT</option>
                            <option value="503">PITHORAGARH</option>
                            <option value="504">PONDICHERRY</option>
                            <option value="505">POONCH</option>
                            <option value="506">PORBANDAR</option>
                            <option value="507">PRAKASAM</option>
                            <option value="508">PRATAPGARH</option>
                            <option value="509">PUDUKKOTTAI</option>
                            <option value="510">PULWAMA</option>
                            <option value="511">PUNE</option>
                            <option value="512">PURBA BARDHAMAN</option>
                            <option value="513">PURBI CHAMPARAN</option>
                            <option value="514">PURI</option>
                            <option value="515">PURNIA</option>
                            <option value="516">PURULIA</option>
                            <option value="517">RAE BARELI</option>
                            <option value="518">RAICHUR</option>
                            <option value="519">RAIGAD</option>
                            <option value="520">RAIGARH</option>
                            <option value="521">RAIPUR</option>
                            <option value="522">RAISEN</option>
                            <option value="523">RAJANNA</option>
                            <option value="524">RAJAURI</option>
                            <option value="525">RAJGARH</option>
                            <option value="526">RAJKOT</option>
                            <option value="527">RAJNANDGAON</option>
                            <option value="528">RAJSAMAND</option>
                            <option value="529">RAMANAGARA</option>
                            <option value="530">RAMANATHAPURAM</option>
                            <option value="531">RAMBAN</option>
                            <option value="532">RAMGARH</option>
                            <option value="533">RAMPUR</option>
                            <option value="534">RANCHI</option>
                            <option value="535">RANGAREDDI</option>
                            <option value="536">RANIPET</option>
                            <option value="537">RATLAM</option>
                            <option value="538">RATNAGIRI</option>
                            <option value="539">RAYAGADA</option>
                            <option value="540">REASI</option>
                            <option value="541">REWA</option>
                            <option value="542">REWARI</option>
                            <option value="543">RI BHOI</option>
                            <option value="544">ROHTAK</option>
                            <option value="545">ROHTAS</option>
                            <option value="546">RUDRA PRAYAG</option>
                            <option value="547">RUPNAGAR</option>
                            <option value="548">S NAGAR</option>
                            <option value="549">SABAR KANTHA</option>
                            <option value="550">SAGAR</option>
                            <option value="551">SAHARANPUR</option>
                            <option value="552">SAHARSA</option>
                            <option value="553">SAHEBGANJ</option>
                            <option value="554">SAIHA</option>
                            <option value="555">SALEM</option>
                            <option value="556">SAMASTIPUR</option>
                            <option value="557">SAMBA</option>
                            <option value="558">SAMBALPUR</option>
                            <option value="559">SAMBHAL</option>
                            <option value="560">SANGAREDDY</option>
                            <option value="561">SANGLI</option>
                            <option value="562">SANGRUR</option>
                            <option value="563">SANT KABEER NAGAR</option>
                            <option value="564">SANT RAVIDAS NAGAR</option>
                            <option value="565">SARAIKELA KHARSAWAN</option>
                            <option value="566">SARAN</option>
                            <option value="567">SATARA</option>
                            <option value="568">SATNA</option>
                            <option value="569">SAWAI MADHOPUR</option>
                            <option value="570">SEHORE</option>
                            <option value="571">SENAPATI</option>
                            <option value="572">SEONI</option>
                            <option value="573">SEPAHIJALA</option>
                            <option value="574">SERCHHIP</option>
                            <option value="575">SHAHDOL</option>
                            <option value="576">SHAHID BHAGAT SINGH NAGAR</option>
                            <option value="577">SHAHJAHANPUR</option>
                            <option value="578">SHAJAPUR</option>
                            <option value="579">SHAMLI</option>
                            <option value="580">SHEIKHPURA</option>
                            <option value="581">SHEOHAR</option>
                            <option value="582">SHEOPUR</option>
                            <option value="583">SHI YOMI</option>
                            <option value="584">SHIMLA</option>
                            <option value="585">SHIVAMOGGA</option>
                            <option value="586">SHIVPURI</option>
                            <option value="587">SHOPIAN</option>
                            <option value="588">SHRAVASTI</option>
                            <option value="589">SIANG</option>
                            <option value="590">SIDDHARTH NAGAR</option>
                            <option value="591">SIDDIPET</option>
                            <option value="592">SIDHI</option>
                            <option value="593">SIKAR</option>
                            <option value="594">SIMDEGA</option>
                            <option value="595">SINDHUDURG</option>
                            <option value="596">SINGRAULI</option>
                            <option value="597">SIRMAUR</option>
                            <option value="598">SIROHI</option>
                            <option value="599">SIRSA</option>
                            <option value="600">SITAMARHI</option>
                            <option value="601">SITAPUR</option>
                            <option value="602">SIVAGANGA</option>
                            <option value="603">SIVASAGAR</option>
                            <option value="604">SIWAN</option>
                            <option value="605">SOLAN</option>
                            <option value="606">SOLAPUR</option>
                            <option value="607">SONBHADRA</option>
                            <option value="608">SONEPUR</option>
                            <option value="609">SONIPAT</option>
                            <option value="610">SONITPUR</option>
                            <option value="611">SOUTH ANDAMANS</option>
                            <option value="612">SOUTH DISTRICT</option>
                            <option value="613">SOUTH GARO HILLS</option>
                            <option value="614">SOUTH GOA</option>
                            <option value="615">SOUTH SALMARA MANCACHAR</option>
                            <option value="616">SOUTH TRIPURA</option>
                            <option value="617">SOUTH WEST GARO HILLS</option>
                            <option value="618">SOUTH WEST KHASI HILLS</option>
                            <option value="619">SPSR NELLORE</option>
                            <option value="620">SRIKAKULAM</option>
                            <option value="621">SRINAGAR</option>
                            <option value="622">SUKMA</option>
                            <option value="623">SULTANPUR</option>
                            <option value="624">SUNDARGARH</option>
                            <option value="625">SUPAUL</option>
                            <option value="626">SURAJPUR</option>
                            <option value="627">SURAT</option>
                            <option value="628">SURENDRANAGAR</option>
                            <option value="629">SURGUJA</option>
                            <option value="630">SURYAPET</option>
                            <option value="631">TAMENGLONG</option>
                            <option value="632">TAPI</option>
                            <option value="633">TARN TARAN</option>
                            <option value="634">TAWANG</option>
                            <option value="635">TEHRI GARHWAL</option>
                            <option value="636">TENKASI</option>
                            <option value="637">THANE</option>
                            <option value="638">THANJAVUR</option>
                            <option value="639">THE NILGIRIS</option>
                            <option value="640">THENI</option>
                            <option value="641">THIRUVALLUR</option>
                            <option value="642">THIRUVANANTHAPURAM</option>
                            <option value="643">THIRUVARUR</option>
                            <option value="644">THOUBAL</option>
                            <option value="645">THRISSUR</option>
                            <option value="646">TIKAMGARH</option>
                            <option value="647">TINSUKIA</option>
                            <option value="648">TIRAP</option>
                            <option value="649">TIRUCHIRAPPALLI</option>
                            <option value="650">TIRUNELVELI</option>
                            <option value="651">TIRUPATHUR</option>
                            <option value="652">TIRUPPUR</option>
                            <option value="653">TIRUVANNAMALAI</option>
                            <option value="654">TONK</option>
                            <option value="655">TUENSANG</option>
                            <option value="656">TUMAKURU</option>
                            <option value="657">TUTICORIN</option>
                            <option value="658">UDAIPUR</option>
                            <option value="659">UDALGURI</option>
                            <option value="660">UDAM SINGH NAGAR</option>
                            <option value="661">UDHAMPUR</option>
                            <option value="662">UDUPI</option>
                            <option value="663">UJJAIN</option>
                            <option value="664">UKHRUL</option>
                            <option value="665">UMARIA</option>
                            <option value="666">UNA</option>
                            <option value="667">UNAKOTI</option>
                            <option value="668">UNNAO</option>
                            <option value="669">UPPER SIANG</option>
                            <option value="670">UPPER SUBANSIRI</option>
                            <option value="671">UTTAR KASHI</option>
                            <option value="672">UTTARA KANNADA</option>
                            <option value="673">VADODARA</option>
                            <option value="674">VAISHALI</option>
                            <option value="675">VALSAD</option>
                            <option value="676">VARANASI</option>
                            <option value="677">VELLORE</option>
                            <option value="678">VIDISHA</option>
                            <option value="679">VIJAYAPURA</option>
                            <option value="680">VIKARABAD</option>
                            <option value="681">VILLUPURAM</option>
                            <option value="682">VIRUDHUNAGAR</option>
                            <option value="683">VISAKHAPATANAM</option>
                            <option value="684">VIZIANAGARAM</option>
                            <option value="685">WANAPARTHY</option>
                            <option value="686">WARANGAL</option>
                            <option value="687">WARDHA</option>
                            <option value="688">WASHIM</option>
                            <option value="689">WAYANAD</option>
                            <option value="690">WEST DISTRICT</option>
                            <option value="691">WEST GARO HILLS</option>
                            <option value="692">WEST GODAVARI</option>
                            <option value="693">WEST JAINTIA HILLS</option>
                            <option value="694">WEST KAMENG</option>
                            <option value="695">WEST KARBI ANGLONG</option>
                            <option value="696">WEST KHASI HILLS</option>
                            <option value="697">WEST SIANG</option>
                            <option value="698">WEST SINGHBHUM</option>
                            <option value="699">WEST TRIPURA</option>
                            <option value="700">WOKHA</option>
                            <option value="701">YADADRI</option>
                            <option value="702">YADAGIRI</option>
                            <option value="703">YAMUNANAGAR</option>
                            <option value="704">YANAM</option>
                            <option value="705">YAVATMAL</option>
                            <option value="706">ZUNHEBOTO</option>
                        </select>
                    </div>


                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Crop Year</p>
                        <input id="crop_year" name="crop_year" className={styles.input_value} type="number" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Crop Type</p>
                        <select className={styles.input_value} id="crop_type" name="crop_type">
                            <option value="0">Arecanut</option>
                            <option value="1">Arhar/Tur</option>
                            <option value="2">Bajra</option>
                            <option value="3">Banana</option>
                            <option value="4">Barley</option>
                            <option value="5">Black pepper</option>
                            <option value="6">Cardamom</option>
                            <option value="7">Cashewnut</option>
                            <option value="8">Castor seed</option>
                            <option value="9">Coconut</option>
                            <option value="10">Coriander</option>
                            <option value="11">Cotton(lint)</option>
                            <option value="12">Cowpea(Lobia)</option>
                            <option value="13">Dry chillies</option>
                            <option value="14">Garlic</option>
                            <option value="15">Ginger</option>
                            <option value="16">Gram</option>
                            <option value="17">Groundnut</option>
                            <option value="18">Guar seed</option>
                            <option value="19">Horse-gram</option>
                            <option value="20">Jowar</option>
                            <option value="21">Jute</option>
                            <option value="22">Khesari</option>
                            <option value="23">Linseed</option>
                            <option value="24">Maize</option>
                            <option value="25">Masoor</option>
                            <option value="26">Mesta</option>
                            <option value="27">Moong(Green Gram)</option>
                            <option value="28">Moth</option>
                            <option value="29">Niger seed</option>
                            <option value="30">Oilseeds total</option>
                            <option value="31">Onion</option>
                            <option value="32">Other Rabi pulses</option>
                            <option value="33">Other Cereals</option>
                            <option value="34">Other Kharif pulses</option>
                            <option value="35">Other Summer Pulses</option>
                            <option value="36">Peas & beans (Pulses)</option>
                            <option value="37">Potato</option>
                            <option value="38">Ragi</option>
                            <option value="39">Rapeseed &Mustard</option>
                            <option value="40">Rice</option>
                            <option value="41">Safflower</option>
                            <option value="42">Sannhamp</option>
                            <option value="43">Sesamum</option>
                            <option value="44">Small millets</option>
                            <option value="45">Soyabean</option>
                            <option value="46">Sugarcane</option>
                            <option value="47">Sunflower</option>
                            <option value="48">Sweet potato</option>
                            <option value="49">Tapioca</option>
                            <option value="50">Tobacco</option>
                            <option value="51">Turmeric</option>
                            <option value="52">Urad</option>
                            <option value="53">Wheat</option>
                            <option value="54">other oilseeds</option>
                        </select>

                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Season</p>
                        <select className={styles.input_value} id="season" name="season">
                            <option value="0">Autumn</option>
                            <option value="1">Kharif</option>
                            <option value="2">Rabi</option>
                            <option value="3">Summer</option>
                            <option value="4">Whole Year</option>
                            <option value="5">Winter</option>
                        </select>
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Area (in hectare)</p>
                        <input id="area" name="area" className={styles.input_value} type="number" />
                    </div>

                    <br />
                    <button className="learn_more_btn btn_transition" onClick={predict} disabled={loading}>
                        {loading ? "Predicting..." : "Predict"}
                    </button>
                    <br />

                    {error && <div className={styles.error}>{error}</div>}
                    {loading && <div className={`${styles.loading_spinner_box} ${styles.show_recc_container}`}
                    > <div className={`${styles.spinner_roller} ${styles.show_recc_container}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>}
                    {!loading && getFert && <ShowRecc type="Predicted" thing="Yield (in ton)" getFert={getFert} />}
                </div>
            </div >
        </>
    );
}

export default FertRecPage;
