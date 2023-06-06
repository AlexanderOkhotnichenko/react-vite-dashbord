import React from "react";
import { NavigationItem } from "../NavigationItem";
import "./navigation.scss";

export function Navigation() {
  return (
    <div className="navigation">
      <h5 className="navigation-title">Menu</h5>
      <ul className="navigation-menu">
        <NavigationItem className="navigation-menu-item active">
          <a href="#" className="navigation-menu-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_2845)">
                <path d="M5.67004 8.75H1.92004C1.42316 8.75001 0.94649 8.55332 0.594208 8.20291C0.241925 7.8525 0.042682 7.37688 0.0400391 6.88V1.88C0.0400391 1.3814 0.23813 0.903228 0.590698 0.550659C0.943267 0.198091 1.42144 0 1.92004 0H5.67004C6.16692 0.00264297 6.64254 0.201886 6.99295 0.554169C7.34336 0.906451 7.54005 1.38313 7.54004 1.88V6.88C7.54004 7.37596 7.34303 7.85161 6.99234 8.2023C6.64165 8.55299 6.166 8.75 5.67004 8.75ZM1.92004 1.25C1.75296 1.25 1.59273 1.31639 1.47458 1.43454C1.35643 1.55269 1.29004 1.71292 1.29004 1.88V6.88C1.29266 7.04535 1.36019 7.20304 1.47806 7.31903C1.59592 7.43502 1.75468 7.50002 1.92004 7.5H5.67004C5.83448 7.5 5.99219 7.43469 6.10846 7.31842C6.22473 7.20215 6.29004 7.04444 6.29004 6.88V1.88C6.29006 1.71464 6.22506 1.55591 6.10907 1.43805C5.99308 1.32018 5.83539 1.25262 5.67004 1.25H1.92004Z" />
                <path d="M14.13 16H10.38C9.88313 16 9.40645 15.8033 9.05417 15.4529C8.70189 15.1025 8.50264 14.6269 8.5 14.13V9.13C8.5 8.6314 8.69809 8.15323 9.05066 7.80066C9.40323 7.44809 9.8814 7.25 10.38 7.25H14.13C14.6269 7.25264 15.1025 7.45189 15.4529 7.80417C15.8033 8.15645 16 8.63313 16 9.13V14.13C16 14.626 15.803 15.1016 15.4523 15.4523C15.1016 15.803 14.626 16 14.13 16ZM10.38 8.5C10.2129 8.5 10.0527 8.56639 9.93454 8.68454C9.81639 8.80269 9.75 8.96292 9.75 9.13V14.13C9.75262 14.2954 9.82018 14.453 9.93805 14.569C10.0559 14.685 10.2146 14.75 10.38 14.75H14.13C14.2114 14.75 14.2921 14.734 14.3673 14.7028C14.4425 14.6717 14.5108 14.626 14.5684 14.5684C14.626 14.5108 14.6717 14.4425 14.7028 14.3673C14.734 14.2921 14.75 14.2114 14.75 14.13V9.13C14.75 8.96464 14.685 8.80591 14.569 8.68805C14.453 8.57018 14.2954 8.50262 14.13 8.5H10.38Z" />
                <path d="M5.67004 16H1.92004C1.42316 16 0.94649 15.8034 0.594208 15.4529C0.241925 15.1025 0.042682 14.6269 0.0400391 14.13V11.67C0.0400391 11.1714 0.23813 10.6933 0.590698 10.3407C0.943267 9.98813 1.42144 9.79004 1.92004 9.79004H5.67004C6.16692 9.79268 6.64254 9.99193 6.99295 10.3442C7.34336 10.6965 7.54005 11.1732 7.54004 11.67V14.17C7.52958 14.659 7.32796 15.1245 6.97839 15.4666C6.62883 15.8086 6.15915 16.0001 5.67004 16ZM1.92004 11C1.75296 11 1.59273 11.0664 1.47458 11.1846C1.35643 11.3027 1.29004 11.4629 1.29004 11.63V14.13C1.29266 14.2954 1.36019 14.4531 1.47806 14.5691C1.59592 14.6851 1.75468 14.7501 1.92004 14.75H5.67004C5.75146 14.75 5.8321 14.734 5.90732 14.7029C5.98254 14.6717 6.05089 14.626 6.10846 14.5685C6.16603 14.5109 6.2117 14.4425 6.24286 14.3673C6.27402 14.2921 6.29004 14.2115 6.29004 14.13V11.67C6.29006 11.5047 6.22506 11.3459 6.10907 11.2281C5.99308 11.1102 5.83539 11.0427 5.67004 11.04L1.92004 11Z" />
                <path d="M14.13 6.25H10.38C9.88313 6.25001 9.40645 6.05332 9.05417 5.70291C8.70189 5.3525 8.50264 4.87688 8.5 4.38V1.88C8.5 1.3814 8.69809 0.903228 9.05066 0.550659C9.40323 0.198091 9.8814 0 10.38 0H14.13C14.6269 0.00264297 15.1025 0.201886 15.4529 0.554169C15.8033 0.906451 16 1.38313 16 1.88V4.38C16 4.87596 15.803 5.35161 15.4523 5.7023C15.1016 6.05299 14.626 6.25 14.13 6.25ZM10.38 1.25C10.2129 1.25 10.0527 1.31639 9.93454 1.43454C9.81639 1.55269 9.75 1.71292 9.75 1.88V4.38C9.75262 4.54535 9.82018 4.70304 9.93805 4.81903C10.0559 4.93502 10.2146 5.00002 10.38 5H14.13C14.2114 5 14.2921 4.98398 14.3673 4.95282C14.4425 4.92166 14.5108 4.87599 14.5684 4.81842C14.626 4.76085 14.6717 4.6925 14.7028 4.61728C14.734 4.54206 14.75 4.46142 14.75 4.38V1.88C14.75 1.71464 14.685 1.55591 14.569 1.43805C14.453 1.32018 14.2954 1.25262 14.13 1.25H10.38Z" />
              </g>
              <defs>
                <clipPath id="clip0_4_2845">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Dashboard</span>
          </a>
        </NavigationItem>
        <NavigationItem className="navigation-menu-item">
          <a href="#" className="navigation-menu-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_2862)">
                <path d="M8.01407 0H14.0619C15.2053 0 15.9993 0.777296 15.9997 1.90643C16.0018 5.70376 16.0018 9.50029 15.9997 13.296C15.9997 14.423 15.2036 15.1997 14.0591 15.2C10.0038 15.2 5.94937 15.2 1.89592 15.2C0.962377 15.2 0.216245 14.6054 0.0362166 13.7166C0.0109416 13.5799 -0.000834285 13.4412 0.00105485 13.3023C-0.000351618 9.49982 -0.000351618 5.69751 0.00105485 1.89531C0.00105485 0.77938 0.798875 0.000694444 1.93214 0.000347127L8.01407 0ZM7.99051 13.9844H14.0204C14.5429 13.9844 14.7679 13.7618 14.7679 13.2436C14.7679 9.48119 14.7679 5.71858 14.7679 1.95574C14.7679 1.4372 14.5436 1.21492 14.0207 1.21492H1.97855C1.45535 1.21492 1.23136 1.4365 1.23136 1.9554C1.23136 5.71754 1.23136 9.48014 1.23136 13.2432C1.23136 13.7618 1.4557 13.9844 1.9782 13.9844H7.99051Z" />
                <path d="M5.18665 5.47513H5.4254C7.59254 5.47513 9.75955 5.47513 11.9265 5.47513C12.2907 5.47513 12.5435 5.65782 12.6012 5.9579C12.6715 6.32397 12.4159 6.65254 12.034 6.68727C11.9933 6.69074 11.9518 6.68935 11.911 6.68935H3.77702C3.3491 6.68935 3.05234 6.43269 3.08468 6.06071C3.09763 5.91248 3.15811 5.77219 3.25733 5.66025C3.86387 5.04029 4.48342 4.43318 5.10437 3.82746C5.35789 3.58017 5.7292 3.58433 5.97217 3.82259C6.21513 4.06085 6.21654 4.43596 5.96408 4.69367C5.75662 4.90588 5.54214 5.11045 5.33117 5.32057C5.29214 5.36121 5.25487 5.40324 5.18665 5.47513Z" />
                <path d="M11.1168 10.0312H10.4761C8.43674 10.0312 6.39865 10.0312 4.36185 10.0312C3.93217 10.0312 3.64912 9.73149 3.70186 9.33832C3.71982 9.20233 3.78434 9.0765 3.8847 8.98173C3.98505 8.88696 4.11521 8.82896 4.25355 8.81735C4.28871 8.81457 4.32388 8.81526 4.35904 8.81526C7.09392 8.81526 9.82892 8.81526 12.564 8.81526C12.8506 8.81526 13.0654 8.9264 13.1794 9.18967C13.2908 9.44703 13.2265 9.67765 13.0303 9.87215C12.4269 10.4702 11.8224 11.0675 11.2166 11.664C11.0341 11.8442 10.8144 11.9008 10.5718 11.8234C10.3418 11.7494 10.2029 11.5803 10.1604 11.3465C10.122 11.1381 10.1924 10.9586 10.3418 10.8096C10.5528 10.6012 10.7637 10.3928 10.9747 10.1844C11.0145 10.1434 11.0514 10.1014 11.1168 10.0312Z" />
              </g>
              <defs>
                <clipPath id="clip0_4_2862">
                  <rect width="16" height="15.2" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Transactions</span>
          </a>
        </NavigationItem>
        <NavigationItem className="navigation-menu-item">
          <a href="#" className="navigation-menu-link">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_2870)">
                <g clipPath="url(#clip1_4_2870)">
                  <path d="M14.5898 0.0198497C14.2176 0.0224897 13.8615 0.172213 13.5992 0.436354C13.337 0.700494 13.1898 1.05762 13.1898 1.42985C13.187 1.5795 13.2108 1.72846 13.2598 1.86986L7.47982 7.59985C7.1927 7.49339 6.87694 7.49339 6.58982 7.59985L5.58982 6.59985C5.64132 6.4588 5.66838 6.31 5.66982 6.15985C5.66982 5.78589 5.52127 5.42725 5.25684 5.16282C4.99242 4.8984 4.63377 4.74985 4.25982 4.74985C3.88586 4.74985 3.52724 4.8984 3.26281 5.16282C2.99838 5.42725 2.84983 5.78589 2.84983 6.15985C2.85128 6.31 2.87832 6.4588 2.92982 6.59985L1.92982 7.59985C1.78877 7.54835 1.63998 7.5213 1.48983 7.51985C1.21054 7.51787 0.936942 7.59888 0.703757 7.75261C0.470572 7.90633 0.2883 8.12585 0.180045 8.38331C0.0717906 8.64078 0.0424393 8.92457 0.0957099 9.19874C0.14898 9.47291 0.282467 9.7251 0.479255 9.92329C0.676043 10.1215 0.927259 10.2568 1.20104 10.312C1.47482 10.3672 1.75884 10.3399 2.01707 10.2334C2.27529 10.127 2.4961 9.94633 2.65148 9.71425C2.80686 9.48216 2.88982 9.20915 2.88982 8.92985C2.89087 8.66379 2.81443 8.40319 2.66982 8.17985L3.54983 7.30984C3.77572 7.44766 4.03521 7.52058 4.29983 7.52058C4.56444 7.52058 4.82394 7.44766 5.04983 7.30984L5.91982 8.17985C5.7832 8.40623 5.71063 8.66545 5.70983 8.92985C5.70646 9.15032 5.75482 9.3685 5.85107 9.56688C5.94731 9.76525 6.08874 9.93829 6.26398 10.0721C6.43923 10.2059 6.64341 10.2967 6.86013 10.3373C7.07685 10.3779 7.30006 10.3671 7.51185 10.3058C7.72363 10.2444 7.9181 10.1343 8.0796 9.98421C8.2411 9.8341 8.36512 9.64819 8.44175 9.44145C8.51838 9.23471 8.54547 9.01288 8.52082 8.79378C8.49617 8.57467 8.42046 8.3644 8.29981 8.17985L13.9198 2.61986C14.1329 2.7537 14.3779 2.82809 14.6294 2.83529C14.881 2.8425 15.1298 2.78228 15.3502 2.66086C15.5706 2.53944 15.7545 2.36125 15.8828 2.14479C16.0111 1.92833 16.0791 1.68148 16.0798 1.42985C16.0801 1.23776 16.0412 1.04762 15.9654 0.871122C15.8896 0.694621 15.7785 0.535473 15.639 0.40344C15.4995 0.271408 15.3344 0.169278 15.154 0.103315C14.9736 0.0373525 14.7816 0.00895061 14.5898 0.0198497ZM1.40983 9.39985C1.31687 9.39985 1.22599 9.37228 1.1487 9.32063C1.07141 9.26899 1.01117 9.19561 0.975593 9.10972C0.94002 9.02384 0.930724 8.92932 0.948859 8.83815C0.966994 8.74698 1.01176 8.66325 1.07749 8.59752C1.14322 8.53179 1.22697 8.48702 1.31814 8.46889C1.40931 8.45075 1.5038 8.46005 1.58968 8.49562C1.67556 8.53119 1.74898 8.59145 1.80062 8.66875C1.85226 8.74604 1.87983 8.8369 1.87983 8.92985C1.87467 9.05101 1.82287 9.16548 1.73528 9.24934C1.64769 9.3332 1.53109 9.37994 1.40983 9.37984V9.39985ZM4.21982 6.58986C4.12687 6.58986 4.03599 6.56228 3.9587 6.51063C3.88141 6.45899 3.82118 6.38559 3.78561 6.29971C3.75003 6.21383 3.74072 6.11932 3.75886 6.02815C3.77699 5.93698 3.82176 5.85323 3.88749 5.7875C3.95322 5.72177 4.03696 5.67702 4.12813 5.65889C4.21931 5.64075 4.3138 5.65005 4.39968 5.68562C4.48556 5.72119 4.55897 5.78144 4.61062 5.85873C4.66226 5.93602 4.68983 6.0269 4.68983 6.11986C4.68467 6.24101 4.63288 6.35547 4.54529 6.43933C4.45771 6.52319 4.34109 6.56996 4.21982 6.56985V6.58986ZM7.02982 9.39985C6.93687 9.39985 6.84599 9.37228 6.7687 9.32063C6.69141 9.26899 6.63118 9.19561 6.5956 9.10972C6.56003 9.02384 6.55072 8.92932 6.56885 8.83815C6.58699 8.74698 6.63176 8.66325 6.69749 8.59752C6.76322 8.53179 6.84696 8.48702 6.93813 8.46889C7.0293 8.45075 7.1238 8.46005 7.20968 8.49562C7.29556 8.53119 7.36897 8.59145 7.42062 8.66875C7.47226 8.74604 7.49982 8.8369 7.49982 8.92985C7.49729 8.99248 7.48226 9.05397 7.4556 9.1107C7.42895 9.16743 7.39122 9.21825 7.34463 9.26018C7.29804 9.30211 7.24353 9.33429 7.18432 9.35484C7.1251 9.37539 7.06237 9.38389 6.99982 9.37984L7.02982 9.39985ZM14.5898 1.89985C14.4969 1.89985 14.406 1.87229 14.3287 1.82065C14.2514 1.769 14.1912 1.69559 14.1556 1.60971C14.12 1.52383 14.1107 1.42933 14.1289 1.33816C14.147 1.24699 14.1918 1.16325 14.2575 1.09752C14.3232 1.03179 14.407 0.98702 14.4981 0.968885C14.5893 0.95075 14.6838 0.960046 14.7697 0.995619C14.8556 1.03119 14.929 1.09144 14.9806 1.16873C15.0323 1.24602 15.0598 1.3369 15.0598 1.42985C15.0547 1.55101 15.0029 1.66548 14.9153 1.74934C14.8277 1.8332 14.7111 1.87996 14.5898 1.87985V1.89985Z" />
                  <path d="M15.2002 3.89029L7.00015 12.0203L4.52016 9.54028C4.47728 9.49613 4.42598 9.46104 4.36929 9.43707C4.31261 9.4131 4.2517 9.40075 4.19016 9.40075C4.12861 9.40075 4.0677 9.4131 4.01102 9.43707C3.95433 9.46104 3.90303 9.49613 3.86015 9.54028L1.05016 12.3503C0.961726 12.4375 0.911395 12.5561 0.910156 12.6803V15.5903C0.910156 15.715 0.959664 15.8345 1.04781 15.9226C1.13595 16.0108 1.25551 16.0603 1.38016 16.0603H15.5002C15.6248 16.0603 15.7443 16.0108 15.8325 15.9226C15.9206 15.8345 15.9702 15.715 15.9702 15.5903V4.22029C15.9644 4.13376 15.9349 4.05051 15.8848 3.97973C15.8347 3.90895 15.766 3.8534 15.6863 3.81924C15.6066 3.78508 15.519 3.77365 15.4332 3.78619C15.3474 3.79873 15.2668 3.83475 15.2002 3.89029ZM3.75015 15.1003H1.88016V12.8603L3.75015 10.9803V15.1003ZM6.56015 15.1003H4.69016V11.0203L6.56015 12.9003V15.1003ZM9.41016 15.1003H7.50015V12.8603L9.41016 10.9803V15.1003ZM12.1602 15.1003H10.3401V10.0203L12.1602 8.23028V15.1003ZM15.0602 15.1003H13.0602V7.33029L15.0602 5.33029V15.1003Z" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_4_2870">
                  <rect width="16" height="16.2791" fill="white" />
                </clipPath>
                <clipPath id="clip1_4_2870">
                  <rect width="16" height="16.03" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Investment</span>
          </a>
        </NavigationItem>
        <NavigationItem className="navigation-menu-item">
          <a href="#" className="navigation-menu-link">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_2879)">
                <path d="M11.11 13.5H5C4.73478 13.5 4.48043 13.3946 4.29289 13.2071C4.10536 13.0196 4 12.7652 4 12.5V1C4 0.734784 4.10536 0.480429 4.29289 0.292892C4.48043 0.105356 4.73478 0 5 0H11.16C11.4252 0 11.6796 0.105356 11.8671 0.292892C12.0546 0.480429 12.16 0.734784 12.16 1V12.5C12.1602 12.6356 12.1328 12.7699 12.0794 12.8946C12.0261 13.0193 11.9479 13.1319 11.8497 13.2254C11.7515 13.3189 11.6352 13.3915 11.5081 13.4387C11.3809 13.4859 11.2455 13.5068 11.11 13.5ZM5 0.75C4.93279 0.752587 4.8692 0.781123 4.82259 0.829605C4.77597 0.878087 4.74995 0.942736 4.75 1.00999V12.51C4.74865 12.5437 4.75412 12.5772 4.76608 12.6087C4.77804 12.6402 4.79625 12.669 4.8196 12.6933C4.84295 12.7176 4.87096 12.7369 4.90196 12.7501C4.93296 12.7632 4.96631 12.77 5 12.77H11.16C11.229 12.77 11.2951 12.7426 11.3438 12.6938C11.3926 12.6451 11.42 12.579 11.42 12.51V1.00999C11.42 0.941038 11.3926 0.874916 11.3438 0.826157C11.2951 0.777397 11.229 0.75 11.16 0.75H5Z" />
                <path d="M5.58997 3.53998H10.52V4.27998H5.58997V3.53998Z" />
                <path d="M6.76001 6.01001H9.27V6.75002H6.76001V6.01001Z" />
                <path d="M9.00006 11.22H7.00006C6.68445 11.22 6.38177 11.0946 6.1586 10.8714C5.93543 10.6483 5.81006 10.3456 5.81006 10.03C5.81006 9.71436 5.93543 9.41168 6.1586 9.18851C6.38177 8.96534 6.68445 8.83997 7.00006 8.83997H9.00006C9.31567 8.83997 9.61835 8.96534 9.84152 9.18851C10.0647 9.41168 10.1901 9.71436 10.1901 10.03C10.1901 10.3456 10.0647 10.6483 9.84152 10.8714C9.61835 11.0946 9.31567 11.22 9.00006 11.22ZM7.00006 9.57996C6.94097 9.57996 6.88245 9.59161 6.82785 9.61423C6.77325 9.63684 6.72366 9.66998 6.68187 9.71176C6.64008 9.75355 6.60693 9.80316 6.58432 9.85776C6.56171 9.91235 6.55006 9.97087 6.55006 10.03C6.55006 10.0891 6.56171 10.1476 6.58432 10.2022C6.60693 10.2568 6.64008 10.3064 6.68187 10.3482C6.72366 10.39 6.77325 10.4231 6.82785 10.4457C6.88245 10.4683 6.94097 10.48 7.00006 10.48H9.00006C9.05916 10.48 9.11768 10.4683 9.17227 10.4457C9.22687 10.4231 9.27648 10.39 9.31827 10.3482C9.36005 10.3064 9.39319 10.2568 9.4158 10.2022C9.43842 10.1476 9.45007 10.0891 9.45007 10.03C9.45007 9.97087 9.43842 9.91235 9.4158 9.85776C9.39319 9.80316 9.36005 9.75355 9.31827 9.71176C9.27648 9.66998 9.22687 9.63684 9.17227 9.61423C9.11768 9.59161 9.05916 9.57996 9.00006 9.57996H7.00006Z" />
                <path d="M15.1701 11.82H11.5701V11.09H15.1701C15.1948 11.0875 15.2178 11.0759 15.2344 11.0574C15.251 11.0389 15.2602 11.0149 15.2601 10.99V2.50999C15.2602 2.48512 15.251 2.46109 15.2344 2.4426C15.2178 2.42411 15.1948 2.41249 15.1701 2.41H11.5701V1.67999H15.1701C15.3902 1.67999 15.6013 1.76744 15.757 1.9231C15.9126 2.07875 16.0001 2.28986 16.0001 2.50999V10.99C16.0001 11.2101 15.9126 11.4212 15.757 11.5769C15.6013 11.7326 15.3902 11.82 15.1701 11.82Z" />
                <path d="M11.57 4.63H14V5.37H11.54L11.57 4.63Z" />
                <path d="M12.9999 9.98001H11.6799V9.23999H12.9999C13.0848 9.23999 13.1662 9.20628 13.2262 9.14627C13.2862 9.08626 13.3199 9.00488 13.3199 8.92001C13.3213 8.87716 13.314 8.83445 13.2985 8.79446C13.283 8.75448 13.2597 8.71801 13.2298 8.68723C13.2 8.65644 13.1642 8.63197 13.1248 8.61526C13.0853 8.59856 13.0428 8.58998 12.9999 8.59H11.6799V7.85999H12.9999C13.2811 7.85999 13.5507 7.97168 13.7495 8.17047C13.9483 8.36926 14.0599 8.63888 14.0599 8.92001C14.0599 9.20114 13.9483 9.47074 13.7495 9.66953C13.5507 9.86831 13.2811 9.98001 12.9999 9.98001Z" />
                <path d="M4.42999 11.82H0.830002C0.609872 11.82 0.398758 11.7326 0.243103 11.5769C0.0874478 11.4212 0 11.2101 0 10.99V2.50999C0 2.28986 0.0874478 2.07875 0.243103 1.9231C0.398758 1.76744 0.609872 1.67999 0.830002 1.67999H4.42999V2.41H0.830002C0.80525 2.41249 0.782313 2.42411 0.765671 2.4426C0.749029 2.46109 0.739881 2.48512 0.740005 2.50999V10.99C0.739881 11.0149 0.749029 11.0389 0.765671 11.0574C0.782313 11.0759 0.80525 11.0875 0.830002 11.09H4.42999V11.82Z" />
                <path d="M2 4.63H4.47V5.37H2V4.63Z" />
                <path d="M4.32994 9.98001H2.99994C2.71881 9.98001 2.4492 9.86831 2.25041 9.66953C2.05162 9.47074 1.93994 9.20114 1.93994 8.92001C1.93994 8.63888 2.05162 8.36926 2.25041 8.17047C2.4492 7.97168 2.71881 7.85999 2.99994 7.85999H4.31995V8.59H2.99994C2.9566 8.59 2.91369 8.59853 2.87366 8.61511C2.83362 8.6317 2.79723 8.656 2.76659 8.68665C2.73594 8.71729 2.71164 8.75366 2.69505 8.7937C2.67847 8.83374 2.66994 8.87668 2.66994 8.92001C2.66992 8.96289 2.67852 9.00531 2.69522 9.0448C2.71192 9.08429 2.73638 9.12002 2.76717 9.14987C2.79795 9.17972 2.83442 9.20309 2.8744 9.21857C2.91439 9.23405 2.95708 9.24133 2.99994 9.23999H4.31995L4.32994 9.98001Z" />
              </g>
              <defs>
                <clipPath id="clip0_4_2879">
                  <rect width="16" height="13.5" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Our Plans</span>
          </a>
        </NavigationItem>
        <NavigationItem className="navigation-menu-item">
          <a href="#" className="navigation-menu-link">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_2894)">
                <path d="M15.9537 9.37201L15.238 7.11965L15.9525 4.87166C16.0321 4.62097 16.0089 4.3489 15.888 4.11529C15.7671 3.88168 15.5584 3.70566 15.3077 3.62594L13.9951 3.20872L13.1975 0.699458C13.1175 0.44903 12.9414 0.240554 12.7079 0.119704C12.4744 -0.00114566 12.2025 -0.0245136 11.9518 0.0547198L8.01245 1.30888L4.04839 0.0469067C3.79766 -0.0326589 3.5256 -0.00940695 3.292 0.111552C3.0584 0.23251 2.8824 0.441275 2.80267 0.691957L2.00011 3.21778L0.69282 3.63312C0.442344 3.71313 0.233813 3.88919 0.112952 4.12271C-0.00790916 4.35623 -0.0312374 4.62815 0.0480822 4.87885L0.760013 7.11902L0.0468321 9.36357C-0.0328334 9.61426 -0.00966452 9.88633 0.111243 10.1199C0.232151 10.3536 0.440896 10.5296 0.69157 10.6093L2.00167 11.0256L2.80424 13.5505C2.88389 13.8011 3.05984 14.0099 3.29338 14.1308C3.52693 14.2518 3.79895 14.2751 4.04964 14.1955L8.01245 12.9348L11.9503 14.1849C12.0744 14.2244 12.205 14.2391 12.3348 14.2281C12.4645 14.2171 12.5908 14.1806 12.7065 14.1208C12.8222 14.061 12.925 13.979 13.0089 13.8795C13.0929 13.78 13.1565 13.6649 13.196 13.5408L13.9929 11.0331L15.3083 10.6149C15.5585 10.5353 15.7669 10.3598 15.8878 10.1268C16.0088 9.89384 16.0325 9.62242 15.9537 9.37201ZM15.0614 4.40006C15.0839 4.4072 15.1047 4.41869 15.1227 4.43388C15.1407 4.44907 15.1556 4.46766 15.1664 4.48858C15.1772 4.50951 15.1838 4.53236 15.1858 4.55583C15.1878 4.5793 15.1852 4.60294 15.178 4.62539L14.8117 5.77798L14.2964 4.15598L15.0614 4.40006ZM3.57711 0.937914C3.58425 0.915464 3.59574 0.894641 3.61093 0.876633C3.62612 0.858625 3.64471 0.843784 3.66563 0.83296C3.68655 0.822135 3.70941 0.815538 3.73288 0.813544C3.75635 0.811551 3.77999 0.814201 3.80244 0.821342L6.6711 1.73298L2.94831 2.91619L3.57711 0.937914ZM0.937527 9.83486C0.915077 9.82772 0.894254 9.81623 0.876246 9.80104C0.858237 9.78585 0.843397 9.76726 0.832573 9.74634C0.821748 9.72541 0.815151 9.70256 0.813157 9.67909C0.811164 9.65562 0.813814 9.63198 0.820955 9.60953L1.18755 8.46038L1.70134 10.0771L0.937527 9.83486ZM12.4222 13.2967C12.4077 13.342 12.3758 13.3797 12.3336 13.4015C12.2914 13.4234 12.2422 13.4276 12.1968 13.4133L9.35287 12.5098L13.0441 11.3365L12.4222 13.2967ZM15.1677 9.75423C15.1569 9.77517 15.1421 9.79377 15.124 9.80895C15.106 9.82413 15.0852 9.83559 15.0627 9.84267L3.80369 13.4211C3.78124 13.4282 3.7576 13.4309 3.73413 13.4289C3.71066 13.4269 3.6878 13.4203 3.66688 13.4095C3.64596 13.3986 3.62737 13.3838 3.61218 13.3658C3.59699 13.3478 3.5855 13.327 3.57836 13.3045L0.822205 4.63289C0.807814 4.58771 0.81186 4.53868 0.83346 4.49647C0.855061 4.45427 0.892467 4.42231 0.937527 4.40756L12.1981 0.829155C12.2205 0.822014 12.2442 0.819364 12.2677 0.821357C12.2911 0.823351 12.314 0.829948 12.3349 0.840773C12.3558 0.851598 12.3744 0.866438 12.3896 0.884446C12.4048 0.902454 12.4163 0.923277 12.4234 0.945727L15.1796 9.61734C15.1939 9.66274 15.1896 9.71197 15.1677 9.75423Z" />
                <path d="M11.5215 4.24034L11.089 2.87398C11.0565 2.77131 10.9845 2.68575 10.8889 2.63611C10.7933 2.58648 10.682 2.57682 10.5793 2.60927L9.2126 3.0415C9.16173 3.05758 9.11452 3.08353 9.07368 3.11786C9.03284 3.1522 8.99916 3.19424 8.97457 3.24158C8.94997 3.28893 8.93494 3.34066 8.93034 3.39381C8.92573 3.44697 8.93165 3.50051 8.94773 3.55138C8.96382 3.60225 8.98977 3.64945 9.0241 3.6903C9.05843 3.73114 9.10047 3.76482 9.14782 3.78941C9.19517 3.81401 9.2469 3.82904 9.30005 3.83364C9.35321 3.83824 9.40675 3.83233 9.45762 3.81624L9.88921 3.67967L8.47504 6.40301L6.59583 6.01235C6.5131 5.99516 6.42706 6.0042 6.3497 6.0382C6.27235 6.0722 6.20751 6.12948 6.16424 6.20206L4.14564 9.59076C4.08929 9.68217 4.07142 9.79217 4.09594 9.89671C4.12045 10.0013 4.18536 10.0918 4.27647 10.1487C4.36758 10.2055 4.47748 10.224 4.58216 10.2C4.68683 10.176 4.77776 10.1116 4.83507 10.0208L4.84382 10.0061L6.71428 6.86836L8.61161 7.26276C8.69834 7.28076 8.78858 7.26992 8.86858 7.2319C8.94859 7.19387 9.01397 7.13074 9.05477 7.05212L10.6108 4.0547L10.7471 4.4863C10.7814 4.58681 10.8537 4.66989 10.9485 4.71776C11.0433 4.76562 11.1531 4.77447 11.2543 4.7424C11.3555 4.71032 11.4402 4.63989 11.4901 4.54616C11.5401 4.45244 11.5514 4.34289 11.5215 4.24096V4.24034Z" />
                <path d="M12.2935 9.05385C12.2935 9.0501 12.2913 9.04603 12.2901 9.04228L11.3581 6.09049C11.3428 6.03937 11.3175 5.99178 11.2838 5.95042C11.2501 5.90906 11.2086 5.87474 11.1616 5.84944C11.1146 5.82413 11.0631 5.80833 11.01 5.80293C10.9569 5.79753 10.9033 5.80264 10.8521 5.81797C10.801 5.8333 10.7534 5.85854 10.7121 5.89227C10.6707 5.92599 10.6364 5.96753 10.6111 6.01452C10.5858 6.0615 10.57 6.11301 10.5646 6.1661C10.5592 6.21919 10.5643 6.27283 10.5796 6.32395L10.5834 6.3352L11.5153 9.28761C11.5481 9.38862 11.619 9.47279 11.7131 9.52212C11.8071 9.57144 11.9167 9.582 12.0184 9.55153C12.1201 9.52105 12.2059 9.45197 12.2573 9.35907C12.3087 9.26618 12.3217 9.15684 12.2935 9.05447V9.05385Z" />
                <path d="M10.3277 9.66138L9.85298 8.15314C9.81958 8.05168 9.74756 7.96745 9.65253 7.9187C9.55749 7.86994 9.44707 7.86057 9.34518 7.89262C9.24328 7.92467 9.15811 7.99555 9.10809 8.08993C9.05807 8.18431 9.04723 8.29459 9.07792 8.3969L9.55264 9.90577C9.58605 10.0072 9.65806 10.0915 9.7531 10.1402C9.84813 10.189 9.95855 10.1983 10.0604 10.1663C10.1623 10.1342 10.2475 10.0634 10.2975 9.96898C10.3476 9.8746 10.3584 9.76432 10.3277 9.662V9.66138Z" />
                <path d="M8.36564 10.2836L7.74622 8.3188C7.73019 8.26791 7.7043 8.22067 7.67001 8.17979C7.63573 8.1389 7.59373 8.10517 7.54642 8.08052C7.45085 8.03073 7.33942 8.02094 7.23664 8.05331C7.18575 8.06934 7.13852 8.09523 7.09763 8.12951C7.05675 8.16379 7.02302 8.20579 6.99836 8.25311C6.94858 8.34867 6.93879 8.4601 6.97116 8.56288L7.59058 10.5283C7.60661 10.5792 7.6325 10.6265 7.66678 10.6674C7.70106 10.7082 7.74306 10.742 7.79038 10.7666C7.8377 10.7913 7.88941 10.8064 7.94256 10.811C7.99571 10.8157 8.04926 10.8099 8.10015 10.7938C8.15104 10.7778 8.19828 10.7519 8.23916 10.7176C8.28005 10.6834 8.31378 10.6414 8.33843 10.594C8.36308 10.5467 8.37818 10.495 8.38284 10.4419C8.38751 10.3887 8.38167 10.3352 8.36564 10.2843V10.2836Z" />
                <path d="M6.403 10.9074L6.28174 10.5139C6.24992 10.411 6.1785 10.3249 6.0832 10.2746C5.9879 10.2243 5.87653 10.214 5.77358 10.2458C5.67063 10.2776 5.58455 10.349 5.53426 10.4443C5.48398 10.5396 5.47361 10.651 5.50543 10.754L5.62544 11.1474C5.6412 11.1984 5.66685 11.2458 5.70092 11.2868C5.73498 11.3279 5.7768 11.3618 5.82399 11.3867C5.87118 11.4116 5.92281 11.427 5.97593 11.4319C6.02906 11.4369 6.08263 11.4313 6.13361 11.4156C6.18458 11.3998 6.23195 11.3742 6.27301 11.3401C6.31408 11.306 6.34803 11.2642 6.37293 11.217C6.39783 11.1698 6.41319 11.1182 6.41813 11.0651C6.42308 11.012 6.41751 10.9584 6.40175 10.9074H6.403Z" />
              </g>
              <defs>
                <clipPath id="clip0_4_2894">
                  <rect width="16" height="14.2421" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Fund Stats</span>
          </a>
        </NavigationItem>
        <NavigationItem className="navigation-menu-item">
          <a href="#" className="navigation-menu-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_2904)">
                <path d="M3.3891 13.184C4.11059 13.7216 4.92918 14.1203 5.80168 14.3591C6.41353 14.5221 7.04381 14.6089 7.67772 14.6177C7.92295 14.623 8.06389 14.8202 7.96298 15.014C7.8957 15.1461 7.77292 15.1703 7.63567 15.1676C6.26253 15.1432 4.96273 14.8264 3.79781 14.1107C1.10233 12.455 -0.195797 10.0457 0.024201 6.93114C0.271447 3.45694 3.04464 0.597392 6.55014 0.0857914C10.6659 -0.515315 14.4963 2.13352 15.2963 6.15036C15.3851 6.5959 15.4022 7.05631 15.4379 7.51078C15.455 7.73371 15.3349 7.86087 15.1519 7.85757C14.9747 7.85427 14.8781 7.73537 14.8748 7.51672C14.824 4.05144 12.2846 1.17802 8.78948 0.629099C5.0263 0.0372404 1.33914 2.59227 0.678814 6.27785C0.228389 8.79655 0.977863 10.9496 2.84011 12.7325C2.86433 12.7556 2.89023 12.7761 2.91916 12.8012C3.34167 12.5739 3.76339 12.3474 4.18432 12.1215C4.55771 11.9207 4.92976 11.7175 5.30584 11.5217C5.56486 11.3869 5.67385 11.1825 5.69202 10.8958C5.72095 10.4397 5.63651 10.0414 5.36471 9.64603C5.1326 9.30683 5.01823 8.8887 4.85004 8.5069C4.82452 8.44164 4.78827 8.38094 4.74273 8.32722C4.64632 8.23076 4.57032 8.11651 4.51911 7.99106C4.4679 7.86561 4.44249 7.73145 4.44435 7.59632C4.44671 7.27694 4.42619 6.95624 4.45209 6.63851C4.46722 6.45323 4.55469 6.27521 4.60884 6.09223C4.63609 6.00074 4.6842 5.90926 4.68588 5.81744C4.69261 5.39898 4.68857 4.98084 4.6842 4.56238C4.6731 3.57155 5.23184 2.76633 6.21073 2.43671C7.17756 2.1043 8.23041 2.10232 9.19853 2.4311C10.2181 2.7693 10.7671 3.58707 10.7399 4.64396C10.7291 5.05648 10.7338 5.46966 10.7399 5.88217C10.7437 5.94627 10.765 6.00819 10.8014 6.06152C10.9208 6.23618 10.9838 6.44206 10.9824 6.65238C10.9787 6.98266 10.9851 7.31294 10.98 7.64322C10.9771 7.84273 10.9124 8.03665 10.7945 8.19918C10.6766 8.36171 10.5111 8.48517 10.3201 8.55313C10.1323 8.62117 9.97155 8.56568 9.91134 8.41211C9.85113 8.25853 9.92009 8.12047 10.0997 8.04583C10.3153 7.95665 10.4223 7.80175 10.421 7.57188C10.421 7.26934 10.4331 6.96582 10.4146 6.66427C10.4032 6.54062 10.3559 6.42277 10.2783 6.32475C10.2077 6.23722 10.167 6.16324 10.1687 6.05029C10.1761 5.54925 10.1731 5.04855 10.1768 4.54752C10.1821 3.83445 9.81278 3.27661 9.13395 2.99686C8.51129 2.74024 7.85567 2.71481 7.19937 2.78846C6.86554 2.8234 6.5387 2.90607 6.22923 3.03385C5.56015 3.31955 5.24664 3.85394 5.24967 4.56866C5.25168 5.08059 5.25538 5.59252 5.24967 6.10412C5.24967 6.16621 5.20123 6.22798 5.17364 6.28908C5.11881 6.41062 5.02328 6.52853 5.01419 6.65238C4.99166 6.97011 5.00679 7.29015 5.00713 7.61019C5.00713 7.77104 5.08416 7.88861 5.20694 7.99199C5.27266 8.04605 5.32102 8.11763 5.34621 8.19808C5.50398 8.80381 5.78351 9.3491 6.15657 9.85278C6.21183 9.93163 6.24363 10.024 6.2484 10.1196C6.26018 10.3888 6.25681 10.659 6.25177 10.9285C6.24268 11.4024 6.03177 11.7618 5.60456 11.991C4.9264 12.3552 4.2479 12.7185 3.56907 13.0809C3.51659 13.11 3.46411 13.1404 3.3891 13.184Z" />
                <path d="M15.263 14.5398C15.219 14.6105 15.1863 14.6881 15.1318 14.7449C14.9707 14.9134 14.8025 15.0752 14.634 15.2367C14.4927 15.3711 14.377 15.3781 14.2138 15.2671C14.1311 15.2106 14.0537 15.1459 13.9683 15.0937C13.8924 15.046 13.8057 15.0174 13.7159 15.0102C13.6261 15.003 13.5359 15.0176 13.4531 15.0526C13.3703 15.0876 13.2976 15.142 13.2412 15.211C13.1848 15.28 13.1465 15.3615 13.1296 15.4484C13.1128 15.529 13.1034 15.6112 13.0913 15.6928C13.0577 15.9121 12.9695 15.994 12.7492 15.9973C12.5289 16.0006 12.3008 16.0006 12.0764 15.9973C11.8648 15.9944 11.7827 15.9263 11.74 15.7265C11.7168 15.6188 11.6976 15.5105 11.6754 15.4028C11.5866 14.9735 11.1524 14.7994 10.7867 15.0491C10.6764 15.1247 10.5707 15.2066 10.4604 15.282C10.3258 15.3734 10.196 15.3645 10.0796 15.2529C9.89885 15.08 9.72046 14.905 9.54441 14.7277C9.43071 14.6135 9.425 14.485 9.51414 14.3529C9.58848 14.2429 9.66787 14.1362 9.73851 14.0226C9.95279 13.6808 9.77215 13.2755 9.36848 13.1969C9.23695 13.1711 9.10307 13.1556 8.97053 13.1338C8.78888 13.1041 8.6984 13.0126 8.69436 12.8366C8.68864 12.5945 8.69032 12.3524 8.69436 12.11C8.69671 11.9448 8.78518 11.8457 8.95271 11.8127C9.0627 11.7922 9.17237 11.7704 9.28237 11.7496C9.74927 11.6605 9.92151 11.2304 9.64129 10.8486C9.57402 10.7548 9.50001 10.664 9.43341 10.5689C9.32677 10.417 9.33249 10.301 9.46402 10.1699C9.63199 10.0001 9.80242 9.8328 9.97533 9.66788C10.1099 9.54006 10.2219 9.53214 10.3827 9.63485C10.5189 9.72172 10.6518 9.81552 10.7864 9.90139C11.1423 10.1237 11.557 9.95489 11.6455 9.55195C11.6808 9.39078 11.7128 9.22861 11.7427 9.06644C11.7727 8.90428 11.8753 8.82501 12.034 8.82105C12.286 8.8151 12.5386 8.8151 12.7906 8.82105C12.9588 8.82534 13.0577 8.92013 13.0849 9.08527C13.1085 9.2263 13.1226 9.36931 13.1545 9.50836C13.2396 9.88223 13.6494 10.0503 13.9837 9.85086C14.0988 9.78216 14.2078 9.70454 14.3201 9.63056C14.4607 9.53742 14.5936 9.54469 14.715 9.66359C14.8906 9.83368 15.0672 10.0028 15.2385 10.1772C15.3606 10.302 15.3676 10.4212 15.2674 10.5643C15.1914 10.6732 15.1063 10.776 15.0299 10.8846C14.7833 11.2364 14.9599 11.6611 15.3882 11.7476C15.5086 11.7721 15.63 11.7926 15.7508 11.8163C15.9096 11.8494 15.9967 11.9422 15.998 12.103C16.0001 12.3504 16.0027 12.5984 15.998 12.8458C15.9943 13.0162 15.9086 13.1041 15.7336 13.1338C15.5957 13.1569 15.4561 13.1721 15.3192 13.1999C14.929 13.2785 14.7473 13.6844 14.9549 14.019C15.0245 14.1316 15.1076 14.2363 15.1779 14.3492C15.2107 14.4108 15.2391 14.4745 15.263 14.5398ZM9.26353 12.6173C9.72405 12.6602 10.0944 12.8485 10.2912 13.2778C10.491 13.7135 10.3921 14.1144 10.1126 14.4711L10.3144 14.6937C11.0262 14.0774 12.138 14.4087 12.2685 15.4369H12.5534C12.6254 15.0177 12.8393 14.7043 13.2413 14.5401C13.6433 14.376 14.0298 14.4483 14.3484 14.6723L14.5899 14.4906C14.5485 14.4285 14.5146 14.3786 14.4819 14.3278C14.3822 14.1771 14.3217 14.0047 14.3058 13.8256C14.2899 13.6466 14.319 13.4665 14.3906 13.3011C14.4622 13.1358 14.5741 12.9902 14.7164 12.8772C14.8587 12.7643 15.0272 12.6873 15.2068 12.6533C15.4615 12.6017 15.4615 12.6017 15.4218 12.3349C14.3084 11.9666 14.0877 11.4068 14.6649 10.413L14.4685 10.201C14.09 10.4837 13.6884 10.5854 13.2481 10.3971C12.8007 10.2062 12.6045 9.84029 12.5588 9.38384H12.2507C12.1962 9.87133 12.0152 10.2756 11.5247 10.4738C11.0343 10.6719 10.6165 10.5068 10.2532 10.2188L10.013 10.417C10.3188 10.7763 10.4338 11.1687 10.2629 11.606C10.089 12.0522 9.72472 12.2583 9.26218 12.3233L9.26353 12.6173Z" />
                <path d="M12.3468 11.0267C13.1205 11.0267 13.762 11.6585 13.7556 12.4162C13.754 12.689 13.6702 12.9552 13.5147 13.1814C13.3592 13.4075 13.139 13.5833 12.8818 13.6867C12.6246 13.7901 12.3421 13.8164 12.0697 13.7624C11.7973 13.7083 11.5473 13.5763 11.3513 13.3829C11.1552 13.1896 11.0219 12.9435 10.9681 12.6759C10.9142 12.4082 10.9423 12.1309 11.0488 11.8789C11.1553 11.6268 11.3354 11.4114 11.5664 11.2598C11.7974 11.1081 12.0689 11.027 12.3468 11.0267ZM11.5058 12.4056C11.5053 12.5687 11.5539 12.7284 11.6456 12.8644C11.7374 13.0004 11.8681 13.1067 12.0213 13.1699C12.1745 13.233 12.3433 13.2502 12.5064 13.2192C12.6696 13.1882 12.8197 13.1105 12.9379 12.9959C13.0561 12.8812 13.137 12.7347 13.1705 12.5749C13.204 12.4152 13.1885 12.2492 13.1261 12.098C13.0636 11.9469 12.9569 11.8173 12.8195 11.7256C12.682 11.6339 12.52 11.5842 12.3539 11.5829C12.2431 11.5821 12.1333 11.6029 12.0307 11.6439C11.9281 11.685 11.8348 11.7456 11.7561 11.8221C11.6774 11.8987 11.615 11.9898 11.5722 12.0901C11.5295 12.1905 11.5074 12.2981 11.5072 12.4069L11.5058 12.4056Z" />
              </g>
              <defs>
                <clipPath id="clip0_4_2904">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>My Profile</span>
          </a>
        </NavigationItem>
      </ul>
      <a href="#" className="navigation-additional">
        Additional
      </a>
      <a href="#" className="navigation-to-home">
        Go to Home
      </a>
    </div>
  );
}