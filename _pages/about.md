---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi there, this is Ye-Xin Lu (鲁叶欣).

I am an algorithm engineer at Alibaba Tongyi Lab, Beijing.
<br>
I received my Eng.D degree from the National Engineering Research Center for Speech and Language Information Processing ([NERC-SLIP](http://nelslip.ustc.edu.cn/main.htm)) of University of Science and Technology of China (USTC), supervised by Prof. [Zhen-Hua Ling (凌震华)](https://staff.ustc.edu.cn/~zhling). I graduated from [School of the Gifted Young](https://sgy.ustc.edu.cn), USTC with a bachelor's degree in electronic information engineering.
<br>
My CV can be downloaded [here](https://yxlu-0102.github.io/materials/Ye-Xin-Lu-CV-2025_EN.pdf).

My main research interests lie in text-to-speech synthesis, speech enhancement, and speech coding.

# 📝 Publications 

### First Author

- **\[ICASSP 2026\]** [DAIEN-TTS: Disentangled Audio Infilling for Environment-Aware Text-to-Speech Synthesis](https://arxiv.org/abs/2509.14684), **Ye-Xin Lu**, Yu Gu, Kun Wei, Yang Ai, Hui-Peng Du, Zhen-Hua Ling.
- **\[INTERSPEECH 2025\]** [Improving Noise Robustness of LLM-based Zero-shot TTS via Discrete Acoustic Token Denoising](https://www.isca-archive.org/interspeech_2025/lu25b_interspeech.html), **Ye-Xin Lu**, Hui-Peng Du, Fei Liu, Yang Ai, Zhen-Hua Ling.
- **\[ICASSP 2025\]** [Incremental Disentanglement for Environment-Aware Zero-Shot Text-to-Speech Synthesis](https://arxiv.org/abs/2412.16977), **Ye-Xin Lu**, Hui-Peng Du, Zheng-Yan Sheng, Yang Ai, Zhen-Hua Ling.
- **\[INTERSPEECH 2024\]** [Multi-Stage Speech Bandwidth Extension with Flexible Sampling Rates Control](https://www.isca-archive.org/interspeech_2024/lu24_interspeech.html), **Ye-Xin Lu**, Yang Ai, Zheng-Yan Sheng, Zhen-Hua Ling.
- **\[IEEE/ACM TASLP 2024\]** [Towards High-Quality and Efficient Speech Bandwidth Extension with Parallel Amplitude and Phase Prediction](https://ieeexplore.ieee.org/document/10806888), **Ye-Xin Lu**, Yang Ai, Hui-Peng Du, Zhen-Hua Ling.
- **\[Neural Networks 2025\]** [Explicit Estimation of Magnitude and Phase Spectra in Parallel for High-Quality Speech Enhancement](https://www.sciencedirect.com/science/article/abs/pii/S0893608025004411), **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.
- **\[INTERSPEECH 2023\]** [MP-SENet: A Speech Enhancement Model with Parallel Denoising of Magnitude and Phase Spectra](https://www.isca-archive.org/interspeech_2023/lu23e_interspeech.html), **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.
- **\[NCMMSC 2022\]** [Source-Filter-Based Generative Adversarial Neural Vocoder for High Fidelity Speech Synthesis](https://link.springer.com/chapter/10.1007/978-981-99-2401-1_6), **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.

### Co-Author

- **\[INTERSPEECH 2024\]** [A Low-Bitrate Neural Audio Codec Framework with Bandwidth Reduction and Recovery for High-Sampling-Rate Waveforms](https://www.isca-archive.org/interspeech_2024/ai24b_interspeech.html), Yang Ai, **Ye-Xin Lu**, Xiao-Hang Jiang, Zheng-Yan Sheng, Rui-Chen Zheng, Zhen-Hua Ling.
- **\[INTERSPEECH 2024\]** [BiVocoder: A Bidirectional Neural Vocoder Integrating Feature Extraction and Waveform Generation](https://www.isca-archive.org/interspeech_2024/du24_interspeech.html), Hui-Peng Du, **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.
- **\[NCMMSC 2023\]** [APNet2: High-Quality and High-Efficiency Neural Vocoder with Direct Prediction of Amplitude and Phase Spectra](https://link.springer.com/chapter/10.1007/978-981-97-0601-3_6), Hui-Peng Du, **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.
- **\[IEEE SPL 2023\]** [Long-frame-shift Neural Speech Phase Prediction with Spectral Continuity Enhancement and Interpolation Error Compensation](https://arxiv.org/abs/2308.08850), Yang Ai, **Ye-Xin Lu**, Zhen-Hua Ling.
- **\[IEEE/ACM TASLP 2026\]** [Universal Discrete-Domain Speech Enhancement](https://ieeexplore.ieee.org/document/11303581), Fei Liu, Yang Ai, **Ye-Xin Lu**, Rui-Chen Zheng, Hui-Peng Du, Zhen-Hua Ling.
- **\[IEEE/ACM TASLP 2024\]** [APCodec: A Neural Audio Codec with Parallel Amplitude and Phase Spectrum Encoding and Decoding](https://dl.acm.org/doi/10.1109/TASLP.2024.3417347), Yang Ai, Xiao-Hang Jiang, **Ye-Xin Lu**, Hui-Peng Du, Zhen-Hua Ling.
- **\[SLT 2024\]** [Pitch-and-Spectrum-Aware Singing Quality Assessment with Bias Correction and Model Fusion](https://arxiv.org/abs/2411.11123), Yu-Fei Shi, Yang Ai, **Ye-Xin Lu**, Hui-Peng Du, Zhen-Hua Ling.
- **\[IEEE SPL 2025\]** [Is GAN Necessary for Mel-Spectrogram-based Neural Vocoder?](https://ieeexplore.ieee.org/document/11123758), Hui-Peng Du, Yang Ai, Rui-Chen Zheng, **Ye-Xin Lu**, Zhen-Hua Ling.
- **\[SLT 2024\]** [Stage-Wise and Prior-Aware Neural Speech Phase Prediction](https://arxiv.org/abs/2410.04990), Fei Liu, Yang Ai, Hui-Peng Du, **Ye-Xin Lu**, Rui-Chen Zheng, Zhen-Hua Ling.
- **\[SLT 2024\]** [MDCTCodec: A Lightweight MDCT-based Neural Audio Codec towards High Sampling Rate and Low Bitrate Scenarios](https://arxiv.org/abs/2411.00464), Xiao-Hang Jiang, Yang Ai, Rui-Chen Zheng, Hui-Peng Du, **Ye-Xin Lu**, Zhen-Hua Ling.

# 🎓 Educations
- *2023.09 - 2026.06*, Eng.D, School of Information Science and Technology, University of Science and Technology of China, Hefei.
- *2021.09 - 2023.06*, M.S., School of Information Science and Technology, University of Science and Technology of China, Hefei.
- *2017.08 - 2021.06*, Undergraduate, School of the Gifted Young, University of Science and Technology of China, Hefei.
- *2014.09 - 2017.06*, Anhui Nanling High School, Wuhu. 

# 💻 Internships
- *2025.10 - 2026.04*, NII, Yamagishi Lab, Tokyo.
- *2025.04 - 2025.09*, Tencent, AI Lab, Beijing.
- *2022.07 - 2023.10*, iFLYTEK, Hefei.
