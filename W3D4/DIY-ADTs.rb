class Stack
  attr_reader :stack

  def initialize()
    @stack = []
  end

  def push(el)
    @stack.push(el)
  end

  def pop
    @stack.pop()
  end

  def peek
    @stack[-1]
  end
end

class Queue
  attr_reader :queue

  def initialize()
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    @queue.shift()
  end

  def peek
    @queue[0]
  end
end

class Map
  def initialize()
    @map = []
  end

  def set(key, value)
    # @map.each_with_index do |pair, i|
    #   @map[i][1] = value if pair[0] == key
    #   return
    # end
    if @map.none? {|pair| pair[0] == key} 
      @map << [key, value]
    else
      @map.each_with_index do |pair, i|
        @map[i][1] = value if pair[0] == key
      end
    end

  end

  def get(key)
    @map.each {|pair| return pair if pair[0] == key}
  end

  def delete(key)
    @map.each_with_index do |pair, i|
      @map.delete_at(i) if pair[0] == key
    end
  end

  def show
    @map
  end
end

# new_stack = Stack.new()
# new_stack.push(5)
# print new_stack.peek
# puts
# print new_stack.stack
# puts

# new_queue = Queue.new()
# new_queue.enqueue(3)
# print new_queue.peek
# puts
# print new_queue.queue
# puts
# print new_queue.dequeue

# new_map = Map.new()
# new_map.set(2, 'hello')
# new_map.set(3, 'jeff')
# new_map.set(4, 'jon')
# new_map.set(4, 'lol')
# new_map.set(4, 'bob')
# p new_map.show
# p new_map.get(3)
# p new_map.delete(2)
# p new_map.show


