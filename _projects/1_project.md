---
layout: page
title: TinyLLM
description: A Framework for Training and Deploying Language Models at the Edge
img: assets/img/TinyLLM.webp
importance: 1
category: work
related_publications: true
---

🚀 **Introducing TinyLLM: Empowering AI at the Edge** 🌟

**TinyLLM** is a lightweight framework designed to train, fine-tune, and deploy smaller language models (30 - 124M) at **edge devices** for supporting embedded sensing/ IoT platforms.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    TinyLLM: You provide data, and TinyLLM generates a custom-trained tiny language model tailored for your embedded sensing application. TinyLLM also simplifies their deployment on resource-constrained platform!
</div>

**Features of TinyLLM**

- 🧩 **Pre-training flexibility**: Allows pre-training, enabling the addition of custom data to improve accuracy.
- 📚 **Dataset preparation made easy**: Flexibility to prepare pre-training datasets by merging multiple datasets seamlessly.
- 🔄 **Fine-tuning support**: Fine-tune various models like LLaMA, Phi, and more to suit diverse use cases.
- 📦 Optimized for small-scale LLMs, making AI accessible even on devices with limited resources.
- 🔓 Fully open-source and Apache-v2 licensed for maximum flexibility.

💡 **Featured Application: Embedded Sensing**

TinyLLM excels in embedded sensing, enabling almost real-time activity recognition and other sensor-based AI tasks with minimal latency. In one of our benchmarks, TinyLLM achieved state-of-the-art accuracy while running on a microcontroller-class device—also matching the performance of larger off-the-shelf LLMs like Meta's Llama 3 and Microsoft's Phi 3. Further, we have created custom foundational models for applications like **hand gesture tracking support**, **localisation**, and **breathing rate detection**.

👉 Check out the framework, experiment with the code, or dive deeper into the technical details:  
 🌍 Website: [TinyLLM.org](https://tinyllm.org/)
🔗 GitHub Repository: [github.com/weiserlab/TinyLLM](https://github.com/weiserlab/TinyLLM)  
 📄 ArXiv Paper: [{% cite tinyllm %}](https://arxiv.org/abs/2412.15304)

#TinyLLM #EdgeAI #EmbeddedSensing #MachineLearning #OpenSource #AI

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/4.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    From the left, the images show the way the sensor data is collected for human gestures and robot localisation. The third image shows the accuracy of TinyLLM models compared to off-the-shelf LLMs.
</div>
