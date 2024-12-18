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

I graduated from [School of the Gifted Young](https://sgy.ustc.edu.cn), University of Science and Technology of China (USTC) with a bachelor's degree in electronic information engineering.

I am currently a fourth-year Eng.D student at the National Engineering Research Center for Speech and Language Information Processing ([NERC-SLIP](http://nelslip.ustc.edu.cn/main.htm)) of USTC, supervised by Prof. [Zhen-Hua Ling (凌震华)](https://staff.ustc.edu.cn/~zhling). 

My main research interests lie in speech synthesis, speech enhancement, and speech encoding.

# 📝 Publications 
## 🎙 Speech Enhancement 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">INTERSPEECH 2023</div><img src='images/publications/mp-senet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MP-SENet: A Speech Enhancement Model with Parallel Denoising of Magnitude and Phase Spectra](https://www.isca-archive.org/interspeech_2023/lu23e_interspeech.pdf)

**Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling

[**Demo Page**](https://yxlu-0102.github.io/MP-SENet) \| [![](https://img.shields.io/github/stars/yxlu-0102/MP-SENet?style=social&label=MP-SENet Stars)](https://github.com/yxlu-0102/MP-SENet)
- In this paper, we propose a novel Speech Enhancement Network that explicitly enhances Magnitude and Phase spectra in parallel, dubbed MP-SENet.
- MP-SENet is the first speech enhancement model that realizes explicit phase estimation and optimization by using phase parallel estimation architecture and anti-wrapping losses.
- MP-SENet mitigates the compensation effect between the magnitude and phase by explicit phase estimation, elevating the quality of enhanced speech to a new level.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE/ACM TASLP 2024</div><img src='images/publications/ap-bwe.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards High-Quality and Efficient Speech Bandwidth Extension with Parallel Amplitude and Phase Prediction](https://arxiv.org/pdf/2401.06387)

**Ye-Xin Lu**, Yang Ai, Hui-Peng Du, Zhen-Hua Ling

[**Demo Page**](https://yxlu-0102.github.io/AP-BWE) \| [![](https://img.shields.io/github/stars/yxlu-0102/AP-BWE?style=social&label=AP-BWE Stars)](https://github.com/yxlu-0102/AP-BWE)
- In this paper, we propose a generative adversarial network-based speech bandwidth extension (BWE) model with the parallel prediction of Amplitude and Phase spectra, dubbed AP-BWE.
- AP-BWE realizes high-quality speech BWE by explicit amplitude-phase estimation and multi-resolution amplitude-phase discrimination.
- AP-BWE realizes efficient speech BWE by using all-convolutional architecture and all-frame-level operations.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">INERSPEECH 2024</div><img src='images/publications/ms-bwe.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multi-Stage Speech Bandwidth Extension with Flexible Sampling Rates Control](https://www.isca-archive.org/interspeech_2024/lu24_interspeech.pdf)

**Ye-Xin Lu**, Yang Ai, Zehng-Yan Sheng, Zhen-Hua Ling

[**Demo Page**](https://yxlu-0102.github.io/MS-BWE-demo)
- In this paper, we propose a multi-stage speech BWE model named MS-BWE, which can handle a set of source and target sampling rate pairs and achieve flexible extensions of frequency bandwidth.
- MS-BWE comprises a cascade of BWE blocks, with each block featuring a dual-stream architecture to realize amplitude and phase extension, progressively painting the speech frequency bands stage
by stage.
- We adopt the teacher-forcing strategy to mitigate the discrepancy between training and inference. 
</div>
</div>

## 🗣️ Speech Synthesis
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Submitted to ICASSP 2025</div><img src='images/publications/idea-tts.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Incremental Disentanglement for Environment-Aware Zero-Shot Text-to-Speech Synthesis

**Ye-Xin Lu**, Hui-Peng Du, Zheng-Yan Sheng, Yang Ai, Zhen-Hua Ling

[**Demo Page**](http://yxlu-0102.github.io/IDEA-TTS)
- In this paper, we propose an Incremental Disentanglement-based Environment-Aware zero-shot text-to-speech (TTS) method, dubbed IDEA-TTS, that can synthesize speech for unseen speakers while preserving the acoustic characteristics of a given environment reference speech.
- IDEA-TTS is capable of environment-robust TTS, environment-aware TTS, and environment conversion with a single model.
</div>
</div>

## 📚 Other Publications
<div class='paper-box-text' markdown="1">
- <span style="background-color: #00369f; color: white; padding: 1px 4px; border-radius: 2px;">IEEE/ACM TASLP 2024</span> [APCodec: A Neural Audio Codec with Parallel Amplitude and Phase Spectrum Encoding and Decoding](https://arxiv.org/pdf/2402.10533), Yang Ai, Xiao-Hang Jiang, **Ye-Xin Lu**, Hui-Peng Du, Zhen-Hua Ling.

- <span style="background-color: #00369f; color: white; padding: 1px 4px; border-radius: 2px;">IEEE SPL 2023</span> [Long-frame-shift Neural Speech Phase Prediction with Spectral Continuity Enhancement and Interpolation Error Compensation](https://arxiv.org/pdf/2308.08850), Yang Ai, **Ye-Xin Lu**, Zhen-Hua Ling.

- <span style="background-color: #00369f; color: white; padding: 1px 4px; border-radius: 2px;">SLT 2024</span> [MDCTCodec: A Lightweight MDCT-based Neural Audio Codec towards High Sampling Rate and Low Bitrate Scenarios](https://arxiv.org/pdf/2411.00464), Xiao-Hang Jiang, Yang Ai, Rui-Chen Zheng, Hui-Peng Du, **Ye-Xin Lu**, Zhen-Hua Ling.

- <span style="background-color: #00369f; color: white; padding: 1px 4px; border-radius: 2px;">SLT 2024</span> [Stage-Wise and Prior-Aware Neural Speech Phase Prediction](https://arxiv.org/pdf/2410.04990), Fei Liu, Yang Ai, Hui-Peng Du, **Ye-Xin Lu**, Rui-Chen Zheng, Zhen-Hua Ling.

- <span style="background-color: #00369f; color: white; padding: 1px 4px; border-radius: 2px;">INERSPEECH 2024</span> [BiVocoder: A Bidirectional Neural Vocoder Integrating Feature Extraction and Waveform Generation](https://www.isca-archive.org/interspeech_2024/du24_interspeech.pdf), Hui-Peng Du, **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.

- <span style="background-color: #00369f; color: white; padding: 1px 4px; border-radius: 2px;">NCMMSC 2023</span> [APNet2: High-Quality and High-Efficiency Neural Vocoder with Direct Prediction of Amplitude and Phase Spectra](https://arxiv.org/pdf/2311.11545), Hui-Peng Du, **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.

- <span style="background-color: #00369f; color: white; padding: 1px 4px; border-radius: 2px;">NCMMSC 2022</span> [Source-Filter-Based Generative Adversarial Neural Vocoder for High Fidelity Speech Synthesis](https://arxiv.org/pdf/2304.13270), **Ye-Xin Lu**, Yang Ai, Zhen-Hua Ling.

</div>

# 🎓 Educations
- *2021.09 - 2026.06 (Expected)*, Eng.D, School of Infomation Science and Technology, University of Science and Technology of China, Hefei.
- *2017.08 - 2021.06*, Undergraduate, School of the Gifted Young, University of Science and Technology of China, Hefei.
- *2014.09 - 2017.06*, Anhui Nanling High School, Wuhu. 

# 💻 Internships
- Looking for 3-6 months internship opportunities of large-language-model (LLM) based speech synthesis.
