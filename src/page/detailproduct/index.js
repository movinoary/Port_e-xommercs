import React, {useState} from 'react';
import {ButtonNormal} from '../../components'
import './style.css'

const DetailProduct = () => {
    let [count, setCount] = useState(1)

    function plus() { 
      count = count + 1;
      setCount(count);
    } 

    function minus() {
      count = count - 1;
      setCount(count);
    }

    function AddCart() {alert("please login / create an account")}


  return (
      <div className='detailproduct-row'>
          <div className='detailproduct-img'>
            <img src='https://images.tokopedia.net/img/cache/900/product-1/2020/8/28/69830966/69830966_9e71df49-6c7e-40de-a0d5-f771cc8f0704_800_800' alt='detail product' />
          </div>
          <div className='detailproduct-desc'>
              <div className='detail-cart'>
                  <div className='cart-title'>
                    <h2 className='detail-title'>ASUS TUF GAMING F15 FX506LH i5-10300H 8GB 512GB GTX1650 4GB W10 144HZ</h2>
                    <p><i className="fas fa-star" /> 4.5 || sold 500 +</p>
                    <h1>Rp 12.799.000</h1>
                  </div>
                  <div className='cart-value'>
                    <p>CART</p>
                    <div className='value-cart'>
                        <button onClick={minus}> - </button>
                        <p>{count}</p>
                        <button onClick={plus}> + </button>
                    </div>
                    <p>Total</p>
                    <p>RP 12.799.000</p>
                    <ButtonNormal 
                      click={AddCart}
                      title='add' 
                      icon="fas fa-shopping-cart"
                    />
                  </div>
              </div>
              <p className='detail-desc'>
              FORTRESS GRAY Spek: Processor 10th Generation Intel® Core™ i5-10300H Processor (2.50 GHz, up to 4.50 GHz with Turbo Boost, 4 Cores, 8 Thread), Operating System Windows 10 Home, Memory 8 GB DDR4 3200MHZ ( UPTO 32GB ), Storage 512GB M.2 NVMe™ PCIe® 3.0 SSD, Graphic nVidia GTX1650 with 4GB DDR6, VRAM, Display 15.6inch (16:9) FHD (1920x1080) 144Hz Anti-Glare IPS-level Panel 45% NTSC, Keyboard Chiclet keyboard with isolated numpad key [ Backlight RGB ], WebCam HD camera (Front) FORTRESS GRAY Spek: Processor 10th Generation Intel® Core™ i5-10300H Processor (2.50 GHz, up to 4.50 GHz with Turbo Boost, 4 Cores, 8 Thread), Operating System Windows 10 Home, Memory 8 GB DDR4 3200MHZ ( UPTO 32GB ), Storage 512GB M.2 NVMe™ PCIe® 3.0 SSD, Graphic nVidia GTX1650 with 4GB DDR6, VRAM, Display 15.6inch (16:9) FHD (1920x1080) 144Hz Anti-Glare IPS-level Panel 45% NTSC, Keyboard Chiclet keyboard with isolated numpad key [ Backlight RGB ], WebCam HD camera (Front) FORTRESS GRAY Spek: Processor 10th Generation Intel® Core™ i5-10300H Processor (2.50 GHz, up to 4.50 GHz with Turbo Boost, 4 Cores, 8 Thread), Operating System Windows 10 Home, Memory 8 GB DDR4 3200MHZ ( UPTO 32GB ), Storage 512GB M.2 NVMe™ PCIe® 3.0 SSD, Graphic nVidia GTX1650 with 4GB DDR6, VRAM, Display 15.6inch (16:9) FHD (1920x1080) 144Hz Anti-Glare IPS-level Panel 45% NTSC, Keyboard Chiclet keyboard with isolated numpad key [ Backlight RGB ], WebCam HD camera (Front) FORTRESS GRAY Spek: Processor 10th Generation Intel® Core™ i5-10300H Processor (2.50 GHz, up to 4.50 GHz with Turbo Boost, 4 Cores, 8 Thread), Operating System Windows 10 Home, Memory 8 GB DDR4 3200MHZ ( UPTO 32GB ), Storage 512GB M.2 NVMe™ PCIe® 3.0 SSD, Graphic nVidia GTX1650 with 4GB DDR6, VRAM, Display 15.6inch (16:9) FHD (1920x1080) 144Hz Anti-Glare IPS-level Panel 45% NTSC, Keyboard Chiclet keyboard with isolated numpad key [ Backlight RGB ], WebCam HD camera (Front) FORTRESS GRAY Spek: Processor 10th Generation Intel® Core™ i5-10300H Processor (2.50 GHz, up to 4.50 GHz with Turbo Boost, 4 Cores, 8 Thread), Operating System Windows 10 Home, Memory 8 GB DDR4 3200MHZ ( UPTO 32GB ), Storage 512GB M.2 NVMe™ PCIe® 3.0 SSD, Graphic nVidia GTX1650 with 4GB DDR6, VRAM, Display 15.6inch (16:9) FHD (1920x1080) 144Hz Anti-Glare IPS-level Panel 45% NTSC, Keyboard Chiclet keyboard with isolated numpad key [ Backlight RGB ], WebCam HD camera (Front) FORTRESS GRAY Spek: Processor 10th Generation Intel® Core™ i5-10300H Processor (2.50 GHz, up to 4.50 GHz with Turbo Boost, 4 Cores, 8 Thread), Operating System Windows 10 Home, Memory 8 GB DDR4 3200MHZ ( UPTO 32GB ), Storage 512GB M.2 NVMe™ PCIe® 3.0 SSD, Graphic nVidia GTX1650 with 4GB DDR6, VRAM, Display 15.6inch (16:9) FHD (1920x1080) 144Hz Anti-Glare IPS-level Panel 45% NTSC, Keyboard Chiclet keyboard with isolated numpad key [ Backlight RGB ], WebCam HD camera (Front)
              </p>
          </div>
      </div>
  );
};


export default DetailProduct;
