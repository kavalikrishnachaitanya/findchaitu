$(document).ready(function () {
  // MODAL
  var modalText = {
    splitexpense: {
      title: 'Split Expense',
      tag: 'FULL-STACK SPENDING PLATFORM',
      detail: 'A complete Flutter & Firebase mobile application for tracking shared expenses. Features Google OAuth authentication, smart debt simplification algorithms, and real-time expense syncing.',
      link: 'https://github.com/kavalikrishnachaitanya/SplitExpense'
    },
    bloodline: {
      title: 'Bloodline Family Tree Creator',
      tag: 'HIERARCHICAL VISUALIZATION APP',
      detail: 'A mobile application built in Flutter for creating, navigating, and visualizing complex family trees. Includes features to automatically compute and identify relationships between any two relatives.',
      link: '#'
    },
    agentorch: {
      title: 'Agentic Orchestration Platform',
      tag: 'ENTERPRISE AI PIPELINE',
      detail: 'Designed a distributed Agent-to-Agent (A2A) framework utilizing LangGraph for Accenture. Implements stateful multi-agent workflows and dynamic Tool-use/MCP integration for automated system intelligence.',
      link: '#'
    },
    hybridrag: {
      title: 'Hybrid Graph-Vector Retrieval',
      tag: 'ADVANCED RAG ARCHITECTURE',
      detail: 'Architected a sophisticated Hybrid RAG system integrating GraphRAG (Neo4j/FalkorDB) with standard Vector RAG capabilities. Powers intelligent reverse engineering and codebase analysis.',
      link: '#'
    },
    reverseeng: {
      title: 'AI-Powered Reverse Engineering',
      tag: 'GEN AI / GRAPH SYSTEM',
      detail: 'Innovative tool empowering users to reverse engineer files, creating comprehensive knowledge graphs and wikis. Uses LLMs to detect code defects and RedisGraph for efficient storage.',
      link: '#'
    },
    supplychain: {
      title: 'Graph-Driven Supply Chain Traceability System',
      tag: 'DATA ENGINEERING',
      detail: 'Developed an end-to-end supply chain traceability system using Neo4j to map product journeys from manufacturing to customer delivery, tracking backward and forward relationships.',
      link: '#'
    },
    rbac: {
      title: 'Graph-Based RBAC Access Management System',
      tag: 'SECURITY / GRAPH',
      detail: 'Designed and implemented a scalable Role-Based Access Control system using Neo4j graph modeling to efficiently manage user permissions and hierarchical access, verified with FastAPI endpoints.',
      link: '#'
    },
    encrypt: {
      title: 'Encrypt and Decrypt Data',
      tag: 'SECURITY UTILITY',
      detail: 'Developed a cross-platform mobile application using Flutter to securely encrypt and decrypt text using AES-256 encryption. Features clipboard functionality and real-time Base64 handling.',
      link: 'https://github.com/kavalikrishnachaitanya'
    }
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () {
    shiftSlide(-1);
  });
  $('#prev').click(function () {
    shiftSlide(1);
  });

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link && modalText[id].link !== '#') {
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);
    } else {
      $('#modal .button').removeClass('visible');
    }

    /* Slide backgrounds have been removed since placeholder images were deleted */
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background: '#0e1c31', // Fallback simple clean background
        backgroundSize: 'cover'
      });
    });
  }
});