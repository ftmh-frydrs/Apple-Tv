import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="mx-auto flex justify-center mt-10 w-[90%]">
        <svg
          width="157"
          height="80"
          viewBox="0 0 157 80"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          class="landing-devices__apple-tv-logo"
        >
          <path d="M43.874 12.7c2.733-3.418 4.588-8.008 4.1-12.7-4 .2-8.883 2.64-11.7 6.06-2.538 2.93-4.784 7.712-4.2 12.205 4.492.4 8.978-2.244 11.8-5.567m4.046 6.446c-6.522-.388-12.068 3.702-15.183 3.702s-7.885-3.506-13.045-3.4c-6.714.098-12.944 3.895-16.35 9.933-7.008 12.08-1.85 29.996 4.965 39.834 3.3 4.867 7.3 10.225 12.554 10.033 4.966-.195 6.912-3.215 12.948-3.215s7.785 3.215 13.04 3.118c5.45-.098 8.86-4.87 12.17-9.74 3.797-5.55 5.35-10.906 5.448-11.2-.097-.097-10.5-4.092-10.608-16.07-.098-10.03 8.176-14.8 8.566-15.096-4.672-6.9-11.973-7.7-14.504-7.886m41.54-9.234v13.23h10.637v8.732H89.46V63c0 4.815 2.117 7.038 6.773 7.038a35.56 35.56 0 003.811-.265v8.784c-1.27.265-3.8.477-6.298.477-11.007 0-15.293-4.234-15.293-14.923V31.874h-8.15v-8.732h8.15V9.913H89.46zM137.323 78.6h-11.68l-19.645-55.44h11.628l13.778 44.552h.265l13.78-44.552h11.415z"></path>
        </svg>
      </div>

      <div>
        <p className="text-center text-5xl font-bold mt-8 font-sans tracking-wider">
          Watch here and on the big screen.
        </p>
        <p className="text-lg text-center mt-5 font-sans">
          Find Apple TV+ on the TV app, available on your Apple devices, smart
          TVs, web and more.
        </p>
      </div>
      <div className="flex mx-auto justify-center gap-8 mt-10 font-bold text-3xl">
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 273.12 80.17"
            role="img"
            class="landing-devices__icon--appletv4k"
            title="Apple&nbsp;TV&nbsp;4K"
          >
            <path d="M89.459 9.847v13.23h10.636v8.73H89.46v31.117c0 4.815 2.117 7.038 6.773 7.038 1.164 0 3.068-.159 3.81-.265v8.784c-1.27.265-3.81.477-6.297.477-11.007 0-15.293-4.234-15.293-14.923V31.808h-8.15v-8.732h8.15V9.846h11.007zM137.323 78.525h-11.68l-19.645-55.44h11.627l13.779 44.552h.264l13.779-44.553h11.416l-19.54 55.44zM255.56 23.08l-18.48 24.194h-.347V23.08h-13.29v55.512h13.29V67.25l6.115-7.871L255.1 78.592h17.023l-20.167-30.856L271.05 23.08zM180.377 58.023l13.792-22.772h.267v23.158h-14.06v-.386zm7.235-34.943l-20.897 34.506v12.157h27.714v8.85h13.314v-8.85h8.532V58.41h-8.532V23.08h-20.131zM47.896 19.129c-6.518-.482-12.048 3.64-15.133 3.64-3.13 0-7.957-3.536-13.074-3.44-6.72.099-12.912 3.91-16.377 9.927C-3.667 41.369 1.53 59.32 8.328 69.15c3.326 4.803 7.292 10.216 12.5 10.019 5.015-.198 6.912-3.244 12.973-3.244 6.057 0 7.766 3.244 13.068 3.147 5.397-.1 8.816-4.903 12.117-9.733 3.82-5.575 5.39-10.973 5.483-11.259-.12-.045-10.52-4.036-10.624-16.018-.094-10.019 8.177-14.835 8.553-15.066-4.695-6.915-11.947-7.678-14.502-7.867zM43.874 12.64C46.642 9.294 48.505 4.634 47.992 0c-3.984.158-8.803 2.654-11.66 5.998-2.56 2.962-4.808 7.705-4.197 12.245 4.44.343 8.973-2.255 11.74-5.603z"></path>
          </svg>
        </figure>
        <figure class="ac-device__image-icon-samsung">
          <figcaption class="visuallyhidden">Samsung</figcaption>
        </figure>
        <figure class="ac-device__image-icon-lg">
          <figcaption class="visuallyhidden">LG</figcaption>
        </figure>
        <figure class="ac-device__image-icon-vizio">
          <figcaption class="visuallyhidden">VIZIO</figcaption>
        </figure>
        <figure class="ac-device__image-icon-sony">
          <figcaption class="visuallyhidden">Sony</figcaption>
        </figure>
      </div>
      <div className="flex mx-auto justify-center gap-8 font-bold text-3xl mt-5">
        <figure class="ac-device__image-icon-roku">
          <figcaption class="visuallyhidden">Roku</figcaption>
        </figure>
        <figure class="ac-device__image-icon-firetv">
          <figcaption class="visuallyhidden">Fire TV</figcaption>
        </figure>
        <figure class="ac-device__image-icon-google-tv">
          <figcaption class="visuallyhidden">Google&nbsp;TV</figcaption>
        </figure>
        <figure class="ac-device__image-icon-playstation">
          <figcaption class="visuallyhidden">PlayStation</figcaption>
        </figure>
        <figure class="ac-device__image-icon-xbox">
          <figcaption class="visuallyhidden">Xbox</figcaption>
        </figure>
      </div>
      <div className="text-center font-sans tracking-wider">
        <p className="text-3xl font-bold mt-12 mb-5">Watch on the go.</p>
        <Link className="text-sm font-bold text-blue-600 pt-5">See all the ways to watch Apple TV+</Link>
      </div>
      <div className="mt-10 flex justify-center mx-auto">
      <figure className="w-[150px] h-[150px] text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 43" class="landing-devices__icon--iphone"><path d="M49,7.51177153 C49,7.15382362 49,6.78309186 48.9865067,6.43792781 C48.9730135,6.09276376 48.9325337,5.74759971 48.8650675,5.40243566 C48.7841079,4.99335234 48.6491754,4.60983673 48.4467766,4.23910497 C48.0554723,3.5104253 47.4347826,2.90958417 46.6521739,2.53885242 C46.2608696,2.35987846 45.8425787,2.21925607 45.4242879,2.14255295 C44.7496252,2.04028212 44.0749625,1.9891467 43.4002999,2.00193056 L28.0314843,2.00193056 C27.6671664,2.00193056 27.2488756,2.00193056 26.9250375,2.00193056 C26.4797601,2.00193056 26.0344828,2.05306597 25.5892054,2.1297691 C25.1574213,2.20647222 24.7526237,2.33431076 24.3613193,2.52606856 C23.5922039,2.89680032 22.958021,3.49764145 22.5667166,4.22632111 C22.3778111,4.59705287 22.2293853,4.99335234 22.1484258,5.3896518 C22.0809595,5.73481586 22.0404798,6.07997991 22.0269865,6.42514396 C22.0134933,6.77030801 22.0134933,7.14103977 22,7.49898768 L22,51.4882285 C22,51.8461764 22,52.2169081 22.0269865,52.5620722 C22.0404798,52.9072362 22.0809595,53.2524003 22.1484258,53.5975643 C22.2293853,54.0066477 22.3643178,54.3901633 22.5667166,54.760895 C22.958021,55.4895747 23.5787106,56.0904158 24.3613193,56.4611476 C24.7526237,56.6401215 25.1709145,56.7807439 25.5892054,56.8574471 C26.2638681,56.9597179 26.9385307,57.0108533 27.6131934,56.9980694 C27.7616192,56.9980694 27.910045,56.9980694 28.0584708,56.9980694 L42.982009,56.9980694 C43.3463268,56.9980694 43.7646177,56.9980694 44.0884558,56.9980694 C44.5337331,56.9980694 44.9790105,56.946934 45.4242879,56.8702309 C45.856072,56.7935278 46.2608696,56.6656892 46.6521739,56.4739314 C47.4212894,56.1031997 48.0554723,55.5151424 48.4467766,54.7736789 C48.6356822,54.4029471 48.7841079,54.0066477 48.8650675,53.6103482 C48.9325337,53.2651841 48.9730135,52.9200201 48.9865067,52.574856 C49,52.229692 49,51.8589602 49,51.5010123 L49,7.98477412 C49,7.83136787 49,7.66517777 49,7.51177153 Z M33.2263868,2.6539071 C33.2263868,2.56442012 33.3073463,2.487717 33.4017991,2.487717 L37.5577211,2.487717 C37.6521739,2.487717 37.7331334,2.56442012 37.7331334,2.6539071 L37.7331334,2.67947481 C37.7331334,2.76896178 37.6521739,2.84566491 37.5577211,2.84566491 L33.4017991,2.84566491 C33.3073463,2.84566491 33.2263868,2.76896178 33.2263868,2.67947481 L33.2263868,2.6539071 L33.2263868,2.6539071 Z M32.2953523,4.07291487 C32.2953523,4.3669435 32.0524738,4.62262058 31.7421289,4.64818829 C31.4047976,4.67375599 31.107946,4.44364663 31.0809595,4.12405028 C31.053973,3.80445394 31.2968516,3.52320916 31.6341829,3.49764145 C31.6611694,3.49764145 31.7016492,3.49764145 31.7286357,3.49764145 C32.0389805,3.52320916 32.2818591,3.77888623 32.2818591,4.07291487 L32.2953523,4.07291487 Z M47.6641679,8.07426109 L47.6641679,51.4882285 C47.6641679,51.8206087 47.6641679,52.1785566 47.6506747,52.4981529 C47.6506747,52.7793977 47.6101949,53.0734263 47.5562219,53.3546711 C47.5022489,53.6486998 47.3943028,53.9171607 47.2593703,54.1856216 C47.0029985,54.6714081 46.5712144,55.0804914 46.0584708,55.3233846 C45.7751124,55.4512231 45.4917541,55.553494 45.1814093,55.6046294 C44.8170915,55.6685487 44.4392804,55.7069002 44.0614693,55.7069002 C43.7511244,55.7069002 43.3598201,55.7069002 42.9955022,55.7069002 L27.6401799,55.7069002 C27.0464768,55.7196841 26.4527736,55.6813325 25.8725637,55.5918455 C25.5622189,55.5407101 25.2788606,55.4512231 24.9955022,55.3106007 C24.4827586,55.0677075 24.0509745,54.6586242 23.7946027,54.1728378 C23.6596702,53.9043768 23.5517241,53.6359159 23.4977511,53.3418873 C23.4437781,53.0606425 23.4032984,52.7793977 23.4032984,52.4853691 C23.3898051,52.1657727 23.3898051,51.8078248 23.3898051,51.4754446 L23.3898051,7.51177153 C23.3898051,7.17939133 23.3898051,6.82144343 23.4032984,6.50184708 C23.4032984,6.2206023 23.4437781,5.92657366 23.4977511,5.64532888 C23.5517241,5.35130024 23.6596702,5.07005546 23.7946027,4.81437839 C24.0509745,4.32859194 24.4827586,3.91950862 24.9955022,3.6766154 C25.2788606,3.54877686 25.5622189,3.44650603 25.8725637,3.39537062 C26.2368816,3.33145135 26.6146927,3.29309979 26.9925037,3.29309979 C27.3028486,3.29309979 27.6941529,3.29309979 28.0584708,3.29309979 L29.88006,3.29309979 C30.1094453,3.29309979 30.2848576,3.45928989 30.2848576,3.6766154 L30.2848576,3.6766154 L30.2848576,4.1751857 C30.2848576,4.87829765 30.892054,5.45357107 31.6341829,5.45357107 L39.4602699,5.45357107 C40.2023988,5.45357107 40.7961019,4.89108151 40.8095952,4.18796955 L40.8095952,3.66383155 C40.8095952,3.44650603 40.9985007,3.28031593 41.2278861,3.28031593 L43.4137931,3.28031593 C44.0074963,3.26753208 44.6011994,3.30588364 45.1814093,3.39537062 C45.4917541,3.44650603 45.7751124,3.53599301 46.0584708,3.6766154 C46.5712144,3.91950862 47.0029985,4.32859194 47.2593703,4.81437839 C47.3943028,5.08283931 47.5022489,5.35130024 47.5562219,5.64532888 C47.6101949,5.92657366 47.6506747,6.20781845 47.6506747,6.50184708 C47.6641679,6.82144343 47.6641679,7.17939133 47.6641679,7.51177153 L47.6641679,8.07426109 Z" transform="rotate(-90 35.5 29.5)"></path></svg>
            <figcaption>
                iPhone
            </figcaption>
        </figure>
        <figure className="w-[150px] h-[150px] text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 43" class="landing-devices__icon--ipad"><path fill-rule="evenodd" d="M48.5,46.5 C48.5,47.052 48.052,47.5 47.5,47.5 L23.5,47.5 C22.948,47.5 22.5,47.052 22.5,46.5 L22.5,9.5 C22.5,8.948 22.948,8.5 23.5,8.5 L47.5,8.5 C48.052,8.5 48.5,8.948 48.5,9.5 L48.5,46.5 Z M23.5,6.5 C21.843,6.5 20.5,7.843 20.5,9.5 L20.5,46.5 C20.5,48.157 21.843,49.5 23.5,49.5 L47.5,49.5 C49.157,49.5 50.5,48.157 50.5,46.5 L50.5,9.5 C50.5,7.843 49.157,6.5 47.5,6.5 L23.5,6.5 Z" transform="rotate(90 35.5 28)"></path></svg>
            <figcaption>
                iPad
            </figcaption>
        </figure>
        <figure className="w-[150px] h-[150px] text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 43" class="landing-devices__icon--mac"><path fill-rule="evenodd" d="M54.6001515,41.0003617 L16.4001515,41.0003617 L16.4001515,16.4523617 C16.4001515,16.1523617 16.5001515,16.0003617 16.9001515,16.0003617 L32.9001515,16.0003617 C32.9361515,16.5363617 33.3641515,16.9643617 33.9001515,17.0003617 L36.9001515,17.0003617 C37.4211515,17.0313617 37.8691515,16.6353617 37.9001515,16.1143617 C37.9021515,16.0763617 37.9021515,16.0383617 37.9001515,16.0003617 L54.1001515,15.9523617 C54.5001515,15.9523617 54.6001515,16.0523617 54.6001515,16.4523617 L54.6001515,41.0003617 Z M60.6501515,41.5503617 L60.6501515,41.0003617 L56.1501515,41.0003617 L56.1501515,16.2503617 C56.1391515,15.2883617 55.3621515,14.5113617 54.4001515,14.5003617 L16.6001515,14.5003617 C15.6791515,14.4813617 14.9171515,15.2133617 14.8981515,16.1343617 C14.8981515,16.1733617 14.8981515,16.2113617 14.9001515,16.2503617 L14.9001515,41.0003617 L10.4,41.0003617 L10.4,41.5503617 C10.3911515,42.0683617 10.7841515,42.5053617 11.3001515,42.5503617 L13.4001515,42.5503617 L13.9001515,43.0003617 L16.9001515,43.0003617 L17.4001515,42.5503617 L53.6501515,42.5503617 L54.1001515,43.0003617 L57.1001515,43.0003617 L57.6501515,42.5503617 L59.6001515,42.5503617 C60.1281515,42.5623617 60.5811515,42.1743617 60.6501515,41.6503617 L60.6501515,41.5503617 Z"></path></svg>
            <figcaption>
                Mac &amp; Windows
            </figcaption>
        </figure>
        <figure className="w-[150px] h-[150px] text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 43" class="landing-devices__icon--airplay"><path d="M2.73925781,21.7675781 L9.22851562,21.7675781 L10.8398438,19.9511719 L2.98828125,19.9511719 C2.27050781,19.9511719 1.90429688,19.5556641 1.90429688,18.8378906 L1.90429688,2.94433594 C1.90429688,2.2265625 2.27050781,1.81640625 2.98828125,1.81640625 L30.5712891,1.81640625 C31.2890625,1.81640625 31.6699219,2.2265625 31.6699219,2.94433594 L31.6699219,18.8378906 C31.6699219,19.5556641 31.2890625,19.9511719 30.5712891,19.9511719 L22.7490234,19.9511719 L24.3457031,21.7675781 L30.8203125,21.7675781 C32.578125,21.7675781 33.5742188,20.7421875 33.5742188,18.9990234 L33.5742188,2.76855469 C33.5742188,1.04003906 32.578125,0 30.8203125,0 L2.73925781,0 C1.02539062,0 0,1.06933594 0,2.76855469 L0,18.9990234 C0,20.7421875 0.99609375,21.7675781 2.73925781,21.7675781 Z M25.7519531,27.3632812 C26.2939453,27.3632812 26.4990234,26.7773437 26.1621094,26.3818359 L17.3144531,16.3769531 C17.0361328,16.0693359 16.5527344,16.0693359 16.2744141,16.3769531 L7.42675781,26.3818359 C7.08984375,26.7773437 7.28027344,27.3632812 7.83691406,27.3632812 L25.7519531,27.3632812 Z" transform="translate(18.725 15.642)"></path></svg>
            <figcaption>
                AirPlay
            </figcaption>
        </figure>
        {/* <figure className="w-[50px] h-[50px] text-center mt-10" class="landing-devices__icon--web-adjust">
            <svg class="landing-devices__icon--web" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M29.9475268,59.5867724 C46.1333288,59.5867724 59.534715,46.15661 59.534715,29.9998218 C59.534715,13.8140198 46.1043387,0.412871288 29.9185367,0.412871288 C13.7617248,0.412871288 0.36059406,13.8140198 0.36059406,29.9998218 C0.36059406,46.15661 13.7907743,59.5867724 29.9475268,59.5867724 Z M29.9475268,54.6556041 C16.256299,54.6556041 5.32073466,43.6910496 5.32073466,29.9998218 C5.32073466,16.3085941 16.2273089,5.34403961 29.9185367,5.34403961 C43.6097644,5.34403961 54.5743189,16.3085941 54.6035429,29.9998218 C54.6325367,43.6910496 43.6387545,54.6556041 29.9475268,54.6556041 Z M17.7936654,44.6192674 L34.443606,36.4973466 C35.3718238,36.033208 36.0099624,35.3950694 36.4740416,34.495901 L44.5669724,17.8749505 C45.4951902,15.9024951 44.0738436,14.3651287 42.0433486,15.3803763 L25.451507,23.473307 C24.5522792,23.879406 23.9431307,24.4885545 23.450002,25.4747525 L15.2990911,42.1246337 C14.3708733,44.039109 15.8792495,45.5474674 17.7936654,44.6192674 Z M29.9475268,33.5676832 C27.9750713,33.5676832 26.4087149,31.9722773 26.4087149,30.0288119 C26.4087149,28.0563565 27.9750713,26.4610099 29.9475268,26.4610099 C31.9199822,26.4610099 33.5153882,28.0563565 33.5153882,30.0288119 C33.5153882,31.9722773 31.9199822,33.5676832 29.9475268,33.5676832 Z" transform="translate(2 2)"></path></svg>
            <figcaption>
                Web
            </figcaption>
        </figure> */}
      </div>
      <div className="mt-10">
        <p className="text-center font-sans text-5xl font-bold">Questions? Answers.</p>
      </div>
    </div>
  );
};

export default Footer;