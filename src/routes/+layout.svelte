<script>
    import "../app.css";
  </script>
  
  <header class="bg-gray-200 p-7 flex justify-between items-center">
    <div class="text-indow text-3xl font-bold">Window Inserts</div>
  
    <div class="space-x-4">
      <button class="text-black p-1 rounded-md outline">Login</button>
      <button class="text-black p-1 rounded-md outline">Logout</button>
    </div>
  </header>
  
  <main>
    <slot />
  </main>