<script>
    import "../app.css";
  </script>
  
  <header class="bg-gray-200 p-4 flex justify-between items-center">
    <div class="text-teal-600 text-2xl font-bold">Window Inserts</div>
  
    <div class="space-x-4">
      <button class="text-teal-800 p-1 rounded-md outline">Login</button>
      <button class="text-teal-800 p-1 rounded-md outline">Logout</button>
    </div>
  </header>
  
  <main>
    <slot />
  </main>